package router

import (
	"gin-vue-admin/api/v1"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitNewsClassifyRouter(Router *gin.RouterGroup) {
	NewsClassifyRouter := Router.Group("newsClassify").Use(middleware.OperationRecord())
	{
		NewsClassifyRouter.POST("createNewsClassify", v1.CreateNewsClassify)   // 新建NewsClassify
		NewsClassifyRouter.DELETE("deleteNewsClassify", v1.DeleteNewsClassify) // 删除NewsClassify
		NewsClassifyRouter.DELETE("deleteNewsClassifyByIds", v1.DeleteNewsClassifyByIds) // 批量删除NewsClassify
		NewsClassifyRouter.PUT("updateNewsClassify", v1.UpdateNewsClassify)    // 更新NewsClassify
		NewsClassifyRouter.GET("findNewsClassify", v1.FindNewsClassify)        // 根据ID获取NewsClassify
		NewsClassifyRouter.GET("getNewsClassifyList", v1.GetNewsClassifyList)  // 获取NewsClassify列表
	}
}
