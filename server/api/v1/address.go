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

// CreateAddress @Tags Address
// @Summary 创建Address
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Address true "创建Address"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /address/createAddress [post]
func CreateAddress(c *gin.Context) {
	var address model.Address
	_ = c.ShouldBindJSON(&address)
	if err := service.CreateAddress(address); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteAddress @Tags Address
// @Summary 删除Address
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Address true "删除Address"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /address/deleteAddress [delete]
func DeleteAddress(c *gin.Context) {
	var address model.Address
	_ = c.ShouldBindJSON(&address)
	if err := service.DeleteAddress(address); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteAddressByIds @Tags Address
// @Summary 批量删除Address
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Address"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /address/deleteAddressByIds [delete]
func DeleteAddressByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteAddressByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateAddress @Tags Address
// @Summary 更新Address
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Address true "更新Address"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /address/updateAddress [put]
func UpdateAddress(c *gin.Context) {
	var address model.Address
	_ = c.ShouldBindJSON(&address)
	if err := service.UpdateAddress(address); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindAddress @Tags Address
// @Summary 用id查询Address
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Address true "用id查询Address"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /address/findAddress [get]
func FindAddress(c *gin.Context) {
	var address model.Address
	_ = c.ShouldBindQuery(&address)
	if err, readdress := service.GetAddress(address.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"readdress": readdress}, c)
	}
}

// GetAddressList @Tags Address
// @Summary 分页获取Address列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.AddressSearch true "分页获取Address列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /address/getAddressList [get]
func GetAddressList(c *gin.Context) {
	var pageInfo request.AddressSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetAddressInfoList(pageInfo); err != nil {
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
