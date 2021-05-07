// 自动生成模板News
package model

import (
	"gin-vue-admin/global"
)

// 如果含有time.Time 请自行import time包
type News struct {
	global.GVA_MODEL
	User_id       int    `json:"user_id" form:"user_id" gorm:"column:user_id;comment:会员id;type:int;size:20;"`
	User_name     string `json:"user_name" form:"user_name" gorm:"column:user_name;comment:会员昵称;type:varchar(20);size:20;"`
	User_img      string `json:"user_img" form:"user_img" gorm:"column:user_img;comment:会员头像;type:varchar(100);size:100;"`
	Title         string `json:"title" form:"title" gorm:"column:title;comment:标题;type:varchar(100);size:100;"`
	Desc          string `json:"desc" form:"desc" gorm:"column:desc;comment:内容描述;type:varchar(255);size:255;"`
	Img_main      string `json:"img_main" form:"img_main" gorm:"column:img_main;comment:主图/预览图;type:varchar(255);size:255;"`
	Cid           int    `json:"cid" form:"cid" gorm:"column:cid;comment:分类id;type:int;size:20;"`
	Cname         string `json:"cname" form:"cname" gorm:"column:cname;comment:分类名称;type:varchar(20);size:20;"`
	Imgs_url      string `json:"imgs_url" form:"imgs_url" gorm:"column:imgs_url;comment:图片地址,多个以逗号分隔(,);type:text;size:0;"`
	Video_url     string `json:"video_url" form:"video_url" gorm:"column:video_url;comment:视频地址;type:text;size:0;"`
	Comment_count int    `json:"comment_count" form:"comment_count" gorm:"column:comment_count;comment:评论数;type:int;size:100;"`
	Like_count    int    `json:"like_count" form:"like_count" gorm:"column:like_count;comment:点赞数;type:int;size:100;"`
	Collect_count int    `json:"collect_count" form:"collect_count" gorm:"column:collect_count;comment:收藏数;type:int;size:100;"`
	Status        int    `json:"status" form:"status" gorm:"column:status;comment:状态;type:int;size:10;"`
}

func (News) TableName() string {
	return "news"
}
