package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateNewsClassify
//@description: 创建NewsClassify记录
//@param: newsClassify model.NewsClassify
//@return: err error

func CreateNewsClassify(newsClassify model.NewsClassify) (err error) {
	err = global.GVA_DB.Create(&newsClassify).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNewsClassify
//@description: 删除NewsClassify记录
//@param: newsClassify model.NewsClassify
//@return: err error

func DeleteNewsClassify(newsClassify model.NewsClassify) (err error) {
	err = global.GVA_DB.Delete(&newsClassify).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteNewsClassifyByIds
//@description: 批量删除NewsClassify记录
//@param: ids request.IdsReq
//@return: err error

func DeleteNewsClassifyByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.NewsClassify{},"id in ?",ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateNewsClassify
//@description: 更新NewsClassify记录
//@param: newsClassify *model.NewsClassify
//@return: err error

func UpdateNewsClassify(newsClassify model.NewsClassify) (err error) {
	err = global.GVA_DB.Save(&newsClassify).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNewsClassify
//@description: 根据id获取NewsClassify记录
//@param: id uint
//@return: err error, newsClassify model.NewsClassify

func GetNewsClassify(id uint) (err error, newsClassify model.NewsClassify) {
	err = global.GVA_DB.Where("id = ?", id).First(&newsClassify).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetNewsClassifyInfoList
//@description: 分页获取NewsClassify记录
//@param: info request.NewsClassifySearch
//@return: err error, list interface{}, total int64

func GetNewsClassifyInfoList(info request.NewsClassifySearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&model.NewsClassify{})
    var newsClassifys []model.NewsClassify
    // 如果有条件搜索 下方会自动创建搜索语句
    if info.Name != "" {
        db = db.Where("`name` = ?",info.Name)
    }
    if info.Is_open != nil {
        db = db.Where("`is_open` = ?",info.Is_open)
    }
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&newsClassifys).Error
	return err, newsClassifys, total
}