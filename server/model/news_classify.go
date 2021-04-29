// 自动生成模板NewsClassify
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type NewsClassify struct {
      global.GVA_MODEL
      Name  string `json:"name" form:"name" gorm:"column:name;comment:分类名称;type:varchar(20);size:20;"`
      Is_open  *bool `json:"is_open" form:"is_open" gorm:"column:is_open;comment:是否打开;type:tinyint;size:4;"`
}


func (NewsClassify) TableName() string {
  return "news_classify"
}

