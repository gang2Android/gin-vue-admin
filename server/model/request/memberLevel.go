package request

import "gin-vue-admin/model"

type MemberLevelSearch struct {
	model.MemberLevel
	PageInfo
}
