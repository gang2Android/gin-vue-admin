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

// @Tags Region
// @Summary 创建Region
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Region true "创建Region"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /region/createRegion [post]
func CreateRegion(c *gin.Context) {
	var region model.Region
	_ = c.ShouldBindJSON(&region)
	if err := service.CreateRegion(region); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags Region
// @Summary 删除Region
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Region true "删除Region"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /region/deleteRegion [delete]
func DeleteRegion(c *gin.Context) {
	var region model.Region
	_ = c.ShouldBindJSON(&region)
	if err := service.DeleteRegion(region); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags Region
// @Summary 批量删除Region
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Region"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /region/deleteRegionByIds [delete]
func DeleteRegionByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteRegionByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags Region
// @Summary 更新Region
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Region true "更新Region"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /region/updateRegion [put]
func UpdateRegion(c *gin.Context) {
	var region model.Region
	_ = c.ShouldBindJSON(&region)
	if err := service.UpdateRegion(region); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags Region
// @Summary 用id查询Region
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Region true "用id查询Region"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /region/findRegion [get]
func FindRegion(c *gin.Context) {
	var region model.Region
	_ = c.ShouldBindQuery(&region)
	if err, reregion := service.GetRegion(region.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reregion": reregion}, c)
	}
}

// @Tags Region
// @Summary 分页获取Region列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.RegionSearch true "分页获取Region列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /region/getRegionList [get]
func GetRegionList(c *gin.Context) {
	var pageInfo request.RegionSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetRegionInfoList(pageInfo); err != nil {
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
