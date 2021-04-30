package request

import "gin-vue-admin/model"

type NewsCommentsSearch struct {
	model.NewsComments
	PageInfo
}
