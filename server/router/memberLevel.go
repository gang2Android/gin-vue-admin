package router

import (
	"gin-vue-admin/api/v1"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitMemberLevelRouter(Router *gin.RouterGroup) {
	MemberLevelRouter := Router.Group("memberLevel").Use(middleware.OperationRecord())
	{
		MemberLevelRouter.POST("createMemberLevel", v1.CreateMemberLevel)             // 新建MemberLevel
		MemberLevelRouter.DELETE("deleteMemberLevel", v1.DeleteMemberLevel)           // 删除MemberLevel
		MemberLevelRouter.DELETE("deleteMemberLevelByIds", v1.DeleteMemberLevelByIds) // 批量删除MemberLevel
		MemberLevelRouter.PUT("updateMemberLevel", v1.UpdateMemberLevel)              // 更新MemberLevel
		MemberLevelRouter.GET("findMemberLevel", v1.FindMemberLevel)                  // 根据ID获取MemberLevel
		MemberLevelRouter.GET("getMemberLevelList", v1.GetMemberLevelList)            // 获取MemberLevel列表
	}
}
