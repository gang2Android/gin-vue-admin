package middleware

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
	"gin-vue-admin/model/response"
	"gin-vue-admin/service"
	serviceApp "gin-vue-admin/service/app"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"strconv"
	"time"
)

func JWTAuthApp() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 我们这里jwt鉴权取头部信息 x-token 登录时回返回token信息 这里前端需要把token存储到cookie或者本地localStorage中 不过需要跟后端协商过期时间 可以约定刷新令牌或者重新登录
		token := c.Request.Header.Get("x-token")
		if token == "" {
			response.FailWithDetailed(gin.H{"reload": true}, "未登录或非法访问", c)
			c.Abort()
			return
		}
		//if service.IsBlacklist(token) {
		//	response.FailWithDetailed(gin.H{"reload": true}, "您的帐户异地登陆或令牌失效", c)
		//	c.Abort()
		//	return
		//}
		j := NewJWT()
		// parseToken 解析token包含的信息
		claims, err := j.ParseTokenApp(token)
		if err != nil {
			if err == TokenExpired {
				response.FailWithDetailed(gin.H{"reload": true}, "授权已过期", c)
				c.Abort()
				return
			}
			response.FailWithDetailed(gin.H{"reload": true}, err.Error(), c)
			c.Abort()
			return
		}
		if err, _ = serviceApp.FindUserById(strconv.Itoa(int(claims.ID))); err != nil {
			response.FailWithDetailed(gin.H{"reload": true}, err.Error(), c)
			c.Abort()
		}
		if claims.ExpiresAt-time.Now().Unix() < claims.BufferTime {
			claims.ExpiresAt = time.Now().Unix() + global.GVA_CONFIG.JWT.ExpiresTime
			newToken, _ := j.CreateTokenApp(*claims)
			newClaims, _ := j.ParseTokenApp(newToken)
			c.Header("new-token", newToken)
			c.Header("new-expires-at", strconv.FormatInt(newClaims.ExpiresAt, 10))
			if global.GVA_CONFIG.System.UseMultipoint {
				err, RedisJwtToken := service.GetRedisJWT(newClaims.Username)
				if err != nil {
					global.GVA_LOG.Error("get redis jwt failed", zap.Any("err", err))
				} else { // 当之前的取成功时才进行拉黑操作
					_ = service.JsonInBlacklist(model.JwtBlacklist{Jwt: RedisJwtToken})
				}
				// 无论如何都要记录当前的活跃状态
				_ = service.SetRedisJWT(newToken, newClaims.Username)
			}
		}
		c.Set("claims", claims)
		c.Next()
	}
}

// 创建一个token
func (j *JWT) CreateTokenApp(claims request.CustomAppClaims) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(j.SigningKey)
}

// 解析 token
func (j *JWT) ParseTokenApp(tokenString string) (*request.CustomAppClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &request.CustomAppClaims{}, func(token *jwt.Token) (i interface{}, e error) {
		return j.SigningKey, nil
	})
	if err != nil {
		if ve, ok := err.(*jwt.ValidationError); ok {
			if ve.Errors&jwt.ValidationErrorMalformed != 0 {
				return nil, TokenMalformed
			} else if ve.Errors&jwt.ValidationErrorExpired != 0 {
				// Token is expired
				return nil, TokenExpired
			} else if ve.Errors&jwt.ValidationErrorNotValidYet != 0 {
				return nil, TokenNotValidYet
			} else {
				return nil, TokenInvalid
			}
		}
	}
	if token != nil {
		if claims, ok := token.Claims.(*request.CustomAppClaims); ok && token.Valid {
			return claims, nil
		}
		return nil, TokenInvalid

	} else {
		return nil, TokenInvalid

	}

}
