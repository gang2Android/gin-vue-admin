package v1

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
	"gin-vue-admin/model/response"
	"gin-vue-admin/service"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// @Tags Member
// @Summary 创建Member
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Member true "创建Member"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /member/createMember [post]
func CreateMember(c *gin.Context) {
	var member model.Member
	_ = c.ShouldBindJSON(&member)
	if err := service.CreateMember(member); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags Member
// @Summary 删除Member
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Member true "删除Member"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /member/deleteMember [delete]
func DeleteMember(c *gin.Context) {
	var member model.Member
	_ = c.ShouldBindJSON(&member)
	if err := service.DeleteMember(member); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags Member
// @Summary 批量删除Member
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Member"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /member/deleteMemberByIds [delete]
func DeleteMemberByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteMemberByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags Member
// @Summary 更新Member
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Member true "更新Member"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /member/updateMember [put]
func UpdateMember(c *gin.Context) {
	var member model.Member
	_ = c.ShouldBindJSON(&member)
	if err := service.UpdateMember(member); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags Member
// @Summary 用id查询Member
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Member true "用id查询Member"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /member/findMember [get]
func FindMember(c *gin.Context) {
	var member model.Member
	_ = c.ShouldBindQuery(&member)
	if err, remember := service.GetMember(member.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"remember": remember}, c)
	}
}

// @Tags Member
// @Summary 分页获取Member列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.MemberSearch true "分页获取Member列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /member/getMemberList [get]
func GetMemberList(c *gin.Context) {
	var pageInfo request.MemberSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetMemberInfoList(pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败", zap.Any("err", err))
		response.FailWithMessage("获取失败", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}
