package app

import (
	"gin-vue-admin/api/v1/app"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitBaseRouter(Router *gin.RouterGroup) (R gin.IRoutes) {
	BaseRouter := Router.Group("base").Use(middleware.NeedInit())
	{
		BaseRouter.POST("login", app.Login)
	}
	return BaseRouter
}
