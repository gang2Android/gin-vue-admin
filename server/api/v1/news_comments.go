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

// @Tags NewsComments
// @Summary 创建NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "创建NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsComments/createNewsComments [post]
func CreateNewsComments(c *gin.Context) {
	var newsComments model.NewsComments
	_ = c.ShouldBindJSON(&newsComments)
	if err := service.CreateNewsComments(newsComments); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags NewsComments
// @Summary 删除NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "删除NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsComments/deleteNewsComments [delete]
func DeleteNewsComments(c *gin.Context) {
	var newsComments model.NewsComments
	_ = c.ShouldBindJSON(&newsComments)
	if err := service.DeleteNewsComments(newsComments); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags NewsComments
// @Summary 批量删除NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /newsComments/deleteNewsCommentsByIds [delete]
func DeleteNewsCommentsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteNewsCommentsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags NewsComments
// @Summary 更新NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "更新NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /newsComments/updateNewsComments [put]
func UpdateNewsComments(c *gin.Context) {
	var newsComments model.NewsComments
	_ = c.ShouldBindJSON(&newsComments)
	if err := service.UpdateNewsComments(newsComments); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags NewsComments
// @Summary 用id查询NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "用id查询NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /newsComments/findNewsComments [get]
func FindNewsComments(c *gin.Context) {
	var newsComments model.NewsComments
	_ = c.ShouldBindQuery(&newsComments)
	if err, renewsComments := service.GetNewsComments(newsComments.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"renewsComments": renewsComments}, c)
	}
}

// @Tags NewsComments
// @Summary 分页获取NewsComments列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.NewsCommentsSearch true "分页获取NewsComments列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsComments/getNewsCommentsList [get]
func GetNewsCommentsList(c *gin.Context) {
	var pageInfo request.NewsCommentsSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetNewsCommentsInfoList(pageInfo); err != nil {
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
