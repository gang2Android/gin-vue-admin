// 自动生成模板NewsComments
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type NewsComments struct {
	global.GVA_MODEL
	News_id       int    `json:"news_id" form:"news_id" gorm:"column:news_id;comment:新媒体id;type:int;size:20;"`
	User_id       int    `json:"user_id" form:"user_id" gorm:"column:user_id;comment:会员id;type:int;size:20;"`
	User_name     string `json:"user_name" form:"user_name" gorm:"column:user_name;comment:会员昵称;type:varchar(50);size:50;"`
	User_img      string `json:"user_img" form:"user_img" gorm:"column:user_img;comment:会员头像;type:varchar(255);size:255;"`
	Content       string `json:"content" form:"content" gorm:"column:content;comment:评论内容;type:text(255);size:255;"`
	Like_count    int    `json:"like_count" form:"like_count" gorm:"column:like_count;comment:点赞数;type:int;size:255;"`
	Like_user_ids string `json:"like_user_ids" form:"like_user_ids" gorm:"column:like_user_ids;comment:点赞会员id;type:varchar(255);size:255;"`
	Up_id         int    `json:"up_id" form:"up_id" gorm:"column:up_id;comment:回复的评论id;type:int;size:20;"`
	Next_ids      string `json:"next_ids" form:"next_ids" gorm:"column:next_ids;comment:下面回复的评论ids;type:varchar(255);size:255;"`
	Is_open       *bool  `json:"is_open" form:"is_open" gorm:"column:is_open;comment:是否启用;type:tinyint;size:4;"`
}

func (NewsComments) TableName() string {
	return "news_comments"
}
