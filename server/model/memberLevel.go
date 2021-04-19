// 自动生成模板MemberLevel
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type MemberLevel struct {
	global.GVA_MODEL
	Name   string `json:"name" form:"name" gorm:"column:name;comment:级别名称;type:varchar(10);size:10;"`
	IsOpen *bool  `json:"is_open" form:"is_open" gorm:"column:is_open;comment:是否打开;type:tinyint;size:2;"`
}

func (MemberLevel) TableName() string {
	return "memberLevel"
}
