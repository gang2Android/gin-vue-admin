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

// @Tags News
// @Summary 创建News
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.News true "创建News"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /news/createNews [post]
func CreateNews(c *gin.Context) {
	var news model.News
	_ = c.ShouldBindJSON(&news)
	if err := service.CreateNews(news); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags News
// @Summary 删除News
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.News true "删除News"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /news/deleteNews [delete]
func DeleteNews(c *gin.Context) {
	var news model.News
	_ = c.ShouldBindJSON(&news)
	if err := service.DeleteNews(news); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags News
// @Summary 批量删除News
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除News"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /news/deleteNewsByIds [delete]
func DeleteNewsByIds(c *gin.Context) {
	var IDS request.IdsReq
	_ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteNewsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags News
// @Summary 更新News
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.News true "更新News"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /news/updateNews [put]
func UpdateNews(c *gin.Context) {
	var news model.News
	_ = c.ShouldBindJSON(&news)
	if err := service.UpdateNews(news); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags News
// @Summary 用id查询News
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.News true "用id查询News"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /news/findNews [get]
func FindNews(c *gin.Context) {
	var news model.News
	_ = c.ShouldBindQuery(&news)
	if err, renews := service.GetNews(news.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"renews": renews}, c)
	}
}

// @Tags News
// @Summary 分页获取News列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.NewsSearch true "分页获取News列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /news/getNewsList [get]
func GetNewsList(c *gin.Context) {
	var pageInfo request.NewsSearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetNewsInfoList(pageInfo); err != nil {
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
