// 自动生成模板Region
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type Region struct {
	global.GVA_MODEL
	Code    int    `json:"code" form:"code" gorm:"column:code;comment:区域id;type:int;size:20;"`
	Name    string `json:"name" form:"name" gorm:"column:name;comment:地区名称;type:varchar(20);size:20;"`
	Pcode   int    `json:"pcode" form:"pcode" gorm:"column:pcode;comment:上级code;type:int;size:20;"`
	Level   int    `json:"level" form:"level" gorm:"column:level;comment:级别;type:int;size:5;"`
	Lng_lat string `json:"lng_lat" form:"lng_lat" gorm:"column:lng_lat;comment:坐标;type:varchar(200);size:200;"`
	Sort    int    `json:"sort" form:"sort" gorm:"column:sort;comment:排序;type:int;size:10;"`
}

func (Region) TableName() string {
	return "region"
}
