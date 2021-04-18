package router

import (
	"gin-vue-admin/api/v1"
	"gin-vue-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitMemberRouter(Router *gin.RouterGroup) {
	MemberRouter := Router.Group("member").Use(middleware.OperationRecord())
	{
		MemberRouter.POST("createMember", v1.CreateMember)             // 新建Member
		MemberRouter.DELETE("deleteMember", v1.DeleteMember)           // 删除Member
		MemberRouter.DELETE("deleteMemberByIds", v1.DeleteMemberByIds) // 批量删除Member
		MemberRouter.PUT("updateMember", v1.UpdateMember)              // 更新Member
		MemberRouter.GET("findMember", v1.FindMember)                  // 根据ID获取Member
		MemberRouter.GET("getMemberList", v1.GetMemberList)            // 获取Member列表
	}
}
