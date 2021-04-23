package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateRegion
//@description: 创建Region记录
//@param: region model.Region
//@return: err error

func CreateRegion(region model.Region) (err error) {
	err = global.GVA_DB.Create(&region).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteRegion
//@description: 删除Region记录
//@param: region model.Region
//@return: err error

func DeleteRegion(region model.Region) (err error) {
	err = global.GVA_DB.Delete(&region).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteRegionByIds
//@description: 批量删除Region记录
//@param: ids request.IdsReq
//@return: err error

func DeleteRegionByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.Region{}, "id in ?", ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateRegion
//@description: 更新Region记录
//@param: region *model.Region
//@return: err error

func UpdateRegion(region model.Region) (err error) {
	err = global.GVA_DB.Save(&region).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetRegion
//@description: 根据id获取Region记录
//@param: id uint
//@return: err error, region model.Region

func GetRegion(id uint) (err error, region model.Region) {
	err = global.GVA_DB.Where("id = ?", id).First(&region).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetRegionInfoList
//@description: 分页获取Region记录
//@param: info request.RegionSearch
//@return: err error, list interface{}, total int64

func GetRegionInfoList(info request.RegionSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.Region{})
	var regions []model.Region
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.Code != 0 {
		db = db.Where("`code` = ?", info.Code)
	}
	if info.Name != "" {
		db = db.Where("`name` = ?", info.Name)
	}
	if info.Pcode != 0 {
		db = db.Where("`pcode` = ?", info.Pcode)
	}
	if info.Level != 0 {
		db = db.Where("`level` = ?", info.Level)
	}
	if info.Lng_lat != "" {
		db = db.Where("`lng_lat` = ?", info.Lng_lat)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&regions).Error
	return err, regions, total
}
