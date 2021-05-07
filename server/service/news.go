package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateNews
//@description: 创建News记录
//@param: news model.News
//@return: err error

func CreateNews(news model.News) (err error) {
	err = global.GVA_DB.Create(&news).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNews
//@description: 删除News记录
//@param: news model.News
//@return: err error

func DeleteNews(news model.News) (err error) {
	err = global.GVA_DB.Delete(&news).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNewsByIds
//@description: 批量删除News记录
//@param: ids request.IdsReq
//@return: err error

func DeleteNewsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.News{}, "id in ?", ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateNews
//@description: 更新News记录
//@param: news *model.News
//@return: err error

func UpdateNews(news model.News) (err error) {
	err = global.GVA_DB.Save(&news).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNews
//@description: 根据id获取News记录
//@param: id uint
//@return: err error, news model.News

func GetNews(id uint) (err error, news model.News) {
	err = global.GVA_DB.Where("id = ?", id).First(&news).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNewsInfoList
//@description: 分页获取News记录
//@param: info request.NewsSearch
//@return: err error, list interface{}, total int64

func GetNewsInfoList(info request.NewsSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.News{})
	var newss []model.News
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.User_id != 0 {
		db = db.Where("`user_id` = ?", info.User_id)
	}
	if info.User_name != "" {
		db = db.Where("`user_name` = ?", info.User_name)
	}
	if info.Title != "" {
		db = db.Where("`title` LIKE ?", "%"+info.Title+"%")
	}
	if info.Cid != 0 {
		db = db.Where("`cid` = ?", info.Cid)
	}
	if info.Cname != "" {
		db = db.Where("`cname` = ?", info.Cname)
	}
	if info.Comment_count != 0 {
		db = db.Where("`comment_count` > ?", info.Comment_count)
	}
	if info.Like_count != 0 {
		db = db.Where("`like_count` > ?", info.Like_count)
	}
	if info.Collect_count != 0 {
		db = db.Where("`collect_count` > ?", info.Collect_count)
	}
	if info.Status != 0 {
		db = db.Where("`status` = ?", info.Status)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&newss).Error
	return err, newss, total
}
