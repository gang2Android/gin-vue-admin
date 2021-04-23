package request

import "gin-vue-admin/model"

type RegionSearch struct {
	model.Region
	PageInfo
}
