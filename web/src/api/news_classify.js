import service from '@/utils/request'

// @Tags NewsClassify
// @Summary 创建NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "创建NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsClassify/createNewsClassify [post]
export const createNewsClassify = (data) => {
     return service({
         url: "/newsClassify/createNewsClassify",
         method: 'post',
         data
     })
 }


// @Tags NewsClassify
// @Summary 删除NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "删除NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsClassify/deleteNewsClassify [delete]
 export const deleteNewsClassify = (data) => {
     return service({
         url: "/newsClassify/deleteNewsClassify",
         method: 'delete',
         data
     })
 }

// @Tags NewsClassify
// @Summary 删除NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsClassify/deleteNewsClassify [delete]
 export const deleteNewsClassifyByIds = (data) => {
     return service({
         url: "/newsClassify/deleteNewsClassifyByIds",
         method: 'delete',
         data
     })
 }

// @Tags NewsClassify
// @Summary 更新NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "更新NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /newsClassify/updateNewsClassify [put]
 export const updateNewsClassify = (data) => {
     return service({
         url: "/newsClassify/updateNewsClassify",
         method: 'put',
         data
     })
 }


// @Tags NewsClassify
// @Summary 用id查询NewsClassify
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsClassify true "用id查询NewsClassify"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /newsClassify/findNewsClassify [get]
 export const findNewsClassify = (params) => {
     return service({
         url: "/newsClassify/findNewsClassify",
         method: 'get',
         params
     })
 }


// @Tags NewsClassify
// @Summary 分页获取NewsClassify列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "分页获取NewsClassify列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsClassify/getNewsClassifyList [get]
 export const getNewsClassifyList = (params) => {
     return service({
         url: "/newsClassify/getNewsClassifyList",
         method: 'get',
         params
     })
 }