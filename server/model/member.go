// 自动生成模板Member
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type Member struct {
	global.GVA_MODEL
	Name   string `json:"name" form:"name" gorm:"column:name;comment:姓名;type:varchar(100);size:100;"`
	Mobile string `json:"mobile" form:"mobile" gorm:"column:mobile;comment:手机号;type:varchar(20);size:20;"`
	Status int    `json:"status" form:"status" gorm:"column:status;comment:状态;type:int;size:10;"`
}

func (Member) TableName() string {
	return "member"
}
