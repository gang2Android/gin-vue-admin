import service from '@/utils/request'

// @Tags NewsComments
// @Summary 创建NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "创建NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsComments/createNewsComments [post]
export const createNewsComments = (data) => {
     return service({
         url: "/newsComments/createNewsComments",
         method: 'post',
         data
     })
 }


// @Tags NewsComments
// @Summary 删除NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "删除NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsComments/deleteNewsComments [delete]
 export const deleteNewsComments = (data) => {
     return service({
         url: "/newsComments/deleteNewsComments",
         method: 'delete',
         data
     })
 }

// @Tags NewsComments
// @Summary 删除NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /newsComments/deleteNewsComments [delete]
 export const deleteNewsCommentsByIds = (data) => {
     return service({
         url: "/newsComments/deleteNewsCommentsByIds",
         method: 'delete',
         data
     })
 }

// @Tags NewsComments
// @Summary 更新NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "更新NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /newsComments/updateNewsComments [put]
 export const updateNewsComments = (data) => {
     return service({
         url: "/newsComments/updateNewsComments",
         method: 'put',
         data
     })
 }


// @Tags NewsComments
// @Summary 用id查询NewsComments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NewsComments true "用id查询NewsComments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /newsComments/findNewsComments [get]
 export const findNewsComments = (params) => {
     return service({
         url: "/newsComments/findNewsComments",
         method: 'get',
         params
     })
 }


// @Tags NewsComments
// @Summary 分页获取NewsComments列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "分页获取NewsComments列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /newsComments/getNewsCommentsList [get]
 export const getNewsCommentsList = (params) => {
     return service({
         url: "/newsComments/getNewsCommentsList",
         method: 'get',
         params
     })
 }