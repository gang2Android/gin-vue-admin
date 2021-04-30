package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateNewsComments
//@description: 创建NewsComments记录
//@param: newsComments model.NewsComments
//@return: err error

func CreateNewsComments(newsComments model.NewsComments) (err error) {
	err = global.GVA_DB.Create(&newsComments).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNewsComments
//@description: 删除NewsComments记录
//@param: newsComments model.NewsComments
//@return: err error

func DeleteNewsComments(newsComments model.NewsComments) (err error) {
	err = global.GVA_DB.Delete(&newsComments).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNewsCommentsByIds
//@description: 批量删除NewsComments记录
//@param: ids request.IdsReq
//@return: err error

func DeleteNewsCommentsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.NewsComments{}, "id in ?", ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateNewsComments
//@description: 更新NewsComments记录
//@param: newsComments *model.NewsComments
//@return: err error

func UpdateNewsComments(newsComments model.NewsComments) (err error) {
	err = global.GVA_DB.Save(&newsComments).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNewsComments
//@description: 根据id获取NewsComments记录
//@param: id uint
//@return: err error, newsComments model.NewsComments

func GetNewsComments(id uint) (err error, newsComments model.NewsComments) {
	err = global.GVA_DB.Where("id = ?", id).First(&newsComments).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNewsCommentsInfoList
//@description: 分页获取NewsComments记录
//@param: info request.NewsCommentsSearch
//@return: err error, list interface{}, total int64

func GetNewsCommentsInfoList(info request.NewsCommentsSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.NewsComments{})
	var newsCommentss []model.NewsComments
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.News_id != 0 {
		db = db.Where("`news_id` = ?", info.News_id)
	}
	if info.User_id != 0 {
		db = db.Where("`user_id` = ?", info.User_id)
	}
	if info.User_name != "" {
		db = db.Where("`user_name` LIKE ?", "%"+info.User_name+"%")
	}
	if info.Like_count != 0 {
		db = db.Where("`like_count` > ?", info.Like_count)
	}
	if info.Up_id != 0 {
		db = db.Where("`up_id` = ?", info.Up_id)
	}
	if info.Is_open != nil {
		db = db.Where("`is_open` = ?", info.Is_open)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&newsCommentss).Error
	return err, newsCommentss, total
}
