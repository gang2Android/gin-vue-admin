package request

import "gin-vue-admin/model"

type MemberSearch struct {
	model.Member
	PageInfo
}
