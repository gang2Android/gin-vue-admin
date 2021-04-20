// 自动生成模板Member
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type Member struct {
	global.GVA_MODEL
	Name     string `json:"name" form:"name" gorm:"column:name;comment:姓名;type:varchar(100);size:100;"`
	Mobile   string `json:"mobile" form:"mobile" gorm:"column:mobile;comment:手机号;type:varchar(20);size:20;"`
	Status   int    `json:"status" form:"status" gorm:"column:status;comment:状态;type:int;size:10;"`
	LevelId  int    `json:"level_id" form:"level_id" gorm:"column:level_id;comment:级别id;type:int;size:20;"`
	Pid      int    `json:"pid" form:"pid" gorm:"column:pid;comment:推荐人id;type:int;size:20;"`
	PwdLogin string `json:"pwd_login" form:"pwd_login" gorm:"column:pwd_login;comment:登录密码;type:varchar;size:255;"`
	PwdPay   string `json:"pwd_pay" form:"pwd_pay" gorm:"column:pwd_pay;comment:支付密码;type:varchar;size:255;"`
	Img      string `json:"img" form:"img" gorm:"column:img;comment:头像地址;type:varchar;size:255;"`
}

func (Member) TableName() string {
	return "member"
}
