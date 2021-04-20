package app

import (
	"gin-vue-admin/global"
	"gin-vue-admin/middleware"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
	"gin-vue-admin/model/request/app"
	"gin-vue-admin/model/response"
	"gin-vue-admin/service"
	serviceApp "gin-vue-admin/service/app"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis"
	"go.uber.org/zap"
	"strconv"
	"time"
)

func Login(c *gin.Context) {
	var loginParams = app.Login{}
	_ = c.ShouldBindJSON(&loginParams)
	member := &model.Member{Name: loginParams.Username, PwdLogin: loginParams.Password}
	if err, user := serviceApp.Login(member); err != nil {
		global.GVA_LOG.Error("登陆失败! 用户名不存在或者密码错误", zap.Any("err", err))
		response.FailWithMessage("用户名不存在或者密码错误", c)
	} else {
		j := &middleware.JWT{SigningKey: []byte(global.GVA_CONFIG.JWT.SigningKey)}
		claims := request.CustomAppClaims{
			ID:         user.ID,
			Username:   user.Name,
			Mobile:     user.Mobile,
			BufferTime: global.GVA_CONFIG.JWT.BufferTime, // 缓冲时间1天 缓冲时间内会获得新的token刷新令牌 此时一个用户会存在两个有效令牌 但是前端只留一个 另一个会丢失
			StandardClaims: jwt.StandardClaims{
				NotBefore: time.Now().Unix() - 1000,                              // 签名生效时间
				ExpiresAt: time.Now().Unix() + global.GVA_CONFIG.JWT.ExpiresTime, // 过期时间 7天  配置文件
				Issuer:    "qmPlus",                                              // 签名的发行者
			},
		}
		token, err := j.CreateTokenApp(claims)
		if err != nil {
			global.GVA_LOG.Error("获取token失败", zap.Any("err", err))
			response.FailWithMessage("获取token失败", c)
			return
		}
		if !global.GVA_CONFIG.System.UseMultipoint {
			response.OkWithDetailed(response.LoginResponseApp{
				Token:     token,
				ExpiresAt: claims.StandardClaims.ExpiresAt * 1000,
			}, "登录成功", c)
			return
		}
		if err, jwtStr := service.GetRedisJWT(user.Mobile); err == redis.Nil {
			if err := service.SetRedisJWT(token, user.Mobile); err != nil {
				global.GVA_LOG.Error("设置登录状态失败", zap.Any("err", err))
				response.FailWithMessage("设置登录状态失败", c)
				return
			}
			response.OkWithDetailed(response.LoginResponseApp{
				Token:     token,
				ExpiresAt: claims.StandardClaims.ExpiresAt * 1000,
			}, "登录成功", c)
		} else if err != nil {
			global.GVA_LOG.Error("设置登录状态失败", zap.Any("err", err))
			response.FailWithMessage("设置登录状态失败", c)
		} else {
			var blackJWT model.JwtBlacklist
			blackJWT.Jwt = jwtStr
			if err := service.JsonInBlacklist(blackJWT); err != nil {
				response.FailWithMessage("jwt作废失败", c)
				return
			}
			if err := service.SetRedisJWT(token, user.Mobile); err != nil {
				response.FailWithMessage("设置登录状态失败", c)
				return
			}
			response.OkWithDetailed(response.LoginResponseApp{
				Token:     token,
				ExpiresAt: claims.StandardClaims.ExpiresAt * 1000,
			}, "登录成功", c)
		}
	}
}

func GetInfo(c *gin.Context) {
	if claims, exists := c.Get("claims"); !exists {
		global.GVA_LOG.Error("从Gin的Context中获取从jwt解析出来的用户ID失败, 请检查路由是否使用jwt中间件")
		response.FailWithMessage("从Gin的Context中获取从jwt解析出来的用户ID失败, 请检查路由是否使用jwt中间件", c)
	} else {
		user := claims.(*request.CustomAppClaims)

		err, member := serviceApp.FindUserById(strconv.Itoa(int(user.ID)))
		if err != nil {
			global.GVA_LOG.Error(err.Error())
			response.FailWithMessage(err.Error(), c)
			return
		}
		response.OkWithData(member, c)
	}

}
