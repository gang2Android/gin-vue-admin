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

// @Tags NewsClassify
// @Summary 创建NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "创建NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsClassify/createNewsClassify [post]
func CreateNewsClassify(c *gin.Context) {
	var newsClassify model.NewsClassify
	_ = c.ShouldBindJSON(&newsClassify)
	if err := service.CreateNewsClassify(newsClassify); err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Any("err", err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags NewsClassify
// @Summary 删除NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "删除NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsClassify/deleteNewsClassify [delete]
func DeleteNewsClassify(c *gin.Context) {
	var newsClassify model.NewsClassify
	_ = c.ShouldBindJSON(&newsClassify)
	if err := service.DeleteNewsClassify(newsClassify); err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Any("err", err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags NewsClassify
// @Summary 批量删除NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /newsClassify/deleteNewsClassifyByIds [delete]
func DeleteNewsClassifyByIds(c *gin.Context) {
	var IDS request.IdsReq
    _ = c.ShouldBindJSON(&IDS)
	if err := service.DeleteNewsClassifyByIds(IDS); err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Any("err", err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// @Tags NewsClassify
// @Summary 更新NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "更新NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /newsClassify/updateNewsClassify [put]
func UpdateNewsClassify(c *gin.Context) {
	var newsClassify model.NewsClassify
	_ = c.ShouldBindJSON(&newsClassify)
	if err := service.UpdateNewsClassify(newsClassify); err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Any("err", err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags NewsClassify
// @Summary 用id查询NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "用id查询NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /newsClassify/findNewsClassify [get]
func FindNewsClassify(c *gin.Context) {
	var newsClassify model.NewsClassify
	_ = c.ShouldBindQuery(&newsClassify)
	if err, renewsClassify := service.GetNewsClassify(newsClassify.ID); err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Any("err", err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"renewsClassify": renewsClassify}, c)
	}
}

// @Tags NewsClassify
// @Summary 分页获取NewsClassify列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.NewsClassifySearch true "分页获取NewsClassify列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsClassify/getNewsClassifyList [get]
func GetNewsClassifyList(c *gin.Context) {
	var pageInfo request.NewsClassifySearch
	_ = c.ShouldBindQuery(&pageInfo)
	if err, list, total := service.GetNewsClassifyInfoList(pageInfo); err != nil {
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
