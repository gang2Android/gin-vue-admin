// 自动生成模板Address
package model

import (
	"gin-vue-admin/global"
)

// Address 如果含有time.Time 请自行import time包
type Address struct {
	global.GVA_MODEL
	Mid          int    `json:"mid" form:"mid" gorm:"column:mid;comment:会员id;type:int;size:20;"`
	Mobile       string `json:"mobile" form:"mobile" gorm:"column:mobile;comment:手机号;type:varchar(20);size:20;"`
	Name         string `json:"name" form:"name" gorm:"column:name;comment:收货人姓名;type:varchar(20);size:20;"`
	CountryId    int    `json:"country_id" form:"country_id" gorm:"column:country_id;comment:国家id;type:int;size:20;"`
	CountryName  string `json:"country_name" form:"country_name" gorm:"column:country_name;comment:国家名称;type:varchar(20);size:20;"`
	ProvinceId   int    `json:"province_id" form:"province_id" gorm:"column:province_id;comment:省id;type:int;size:20;"`
	ProvinceName string `json:"province_name" form:"province_name" gorm:"column:province_name;comment:省名称;type:varchar(20);size:20;"`
	CityId       int    `json:"city_id" form:"city_id" gorm:"column:city_id;comment:市id;type:int;size:20;"`
	CityName     string `json:"city_name" form:"city_name" gorm:"column:city_name;comment:市名称;type:varchar(20);size:20;"`
	CountyId     int    `json:"county_id" form:"county_id" gorm:"column:county_id;comment:区id;type:int;size:20;"`
	CountyName   string `json:"county_name" form:"county_name" gorm:"column:county_name;comment:区名称;type:varchar(20);size:20;"`
	StreetId     int    `json:"street_id" form:"street_id" gorm:"column:street_id;comment:街道id;type:int;size:20;"`
	StreetName   string `json:"street_name" form:"street_name" gorm:"column:street_name;comment:街道名称;type:varchar(20);size:20;"`
	Detail       string `json:"detail" form:"detail" gorm:"column:detail;comment:详细地址;type:varchar(255);size:255;"`
	IsDefault    int    `json:"is_default" form:"is_default" gorm:"column:is_default;comment:是否是默认地址0默认1不是;type:tinyint;size:2;"`
}

func (Address) TableName() string {
	return "address"
}
