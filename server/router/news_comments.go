package router

import (
	"gin-vue-admin/api/v1"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitNewsCommentsRouter(Router *gin.RouterGroup) {
	NewsCommentsRouter := Router.Group("newsComments").Use(middleware.OperationRecord())
	{
		NewsCommentsRouter.POST("createNewsComments", v1.CreateNewsComments)             // 新建NewsComments
		NewsCommentsRouter.DELETE("deleteNewsComments", v1.DeleteNewsComments)           // 删除NewsComments
		NewsCommentsRouter.DELETE("deleteNewsCommentsByIds", v1.DeleteNewsCommentsByIds) // 批量删除NewsComments
		NewsCommentsRouter.PUT("updateNewsComments", v1.UpdateNewsComments)              // 更新NewsComments
		NewsCommentsRouter.GET("findNewsComments", v1.FindNewsComments)                  // 根据ID获取NewsComments
		NewsCommentsRouter.GET("getNewsCommentsList", v1.GetNewsCommentsList)            // 获取NewsComments列表
	}
}
