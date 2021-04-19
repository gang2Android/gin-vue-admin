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

// @Tags MemberLevel
// @Summary 创建MemberLevel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.MemberLevel true "创建MemberLevel"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /memberLevel/createMemberLevel [post]
func CreateMemberLevel(c *gin.Context) {
	var memberLevel model.MemberLevel
	_ = c.ShouldBindJSON(&memberLevel)
	if err := service.CreateMemberLevel(memberLevel); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags MemberLevel
// @Summary 删除MemberLevel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.MemberLevel true "删除MemberLevel"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /memberLevel/deleteMemberLevel [delete]
func DeleteMemberLevel(c *gin.Context) {
	var memberLevel model.MemberLevel
	_ = c.ShouldBindJSON(&memberLevel)
	if err := service.DeleteMemberLevel(memberLevel); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags MemberLevel
// @Summary 批量删除MemberLevel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除MemberLevel"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /memberLevel/deleteMemberLevelByIds [delete]
func DeleteMemberLevelByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteMemberLevelByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags MemberLevel
// @Summary 更新MemberLevel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.MemberLevel true "更新MemberLevel"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /memberLevel/updateMemberLevel [put]
func UpdateMemberLevel(c *gin.Context) {
	var memberLevel model.MemberLevel
	_ = c.ShouldBindJSON(&memberLevel)
	if err := service.UpdateMemberLevel(memberLevel); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags MemberLevel
// @Summary 用id查询MemberLevel
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.MemberLevel true "用id查询MemberLevel"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /memberLevel/findMemberLevel [get]
func FindMemberLevel(c *gin.Context) {
	var memberLevel model.MemberLevel
	_ = c.ShouldBindQuery(&memberLevel)
	if err, rememberLevel := service.GetMemberLevel(memberLevel.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"rememberLevel": rememberLevel}, c)
	}
}

// @Tags MemberLevel
// @Summary 分页获取MemberLevel列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.MemberLevelSearch true "分页获取MemberLevel列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /memberLevel/getMemberLevelList [get]
func GetMemberLevelList(c *gin.Context) {
	var pageInfo request.MemberLevelSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetMemberLevelInfoList(pageInfo); err != nil {
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
