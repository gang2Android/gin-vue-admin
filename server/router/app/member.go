package app

import (
	"gin-vue-admin/api/v1/app"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitMemberRouter(Router *gin.RouterGroup) (R gin.IRoutes) {
	BaseRouter := Router.Group("member").Use(middleware.NeedInit())
	{
		BaseRouter.GET("getInfo", app.GetInfo)
	}
	return BaseRouter
}
