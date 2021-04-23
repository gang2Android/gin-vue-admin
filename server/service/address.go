package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateAddress
//@description: 创建Address记录
//@param: address model.Address
//@return: err error

func CreateAddress(address model.Address) (err error) {
	err = global.GVA_DB.Create(&address).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteAddress
//@description: 删除Address记录
//@param: address model.Address
//@return: err error

func DeleteAddress(address model.Address) (err error) {
	err = global.GVA_DB.Delete(&address).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteAddressByIds
//@description: 批量删除Address记录
//@param: ids request.IdsReq
//@return: err error

func DeleteAddressByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.Address{}, "id in ?", ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateAddress
//@description: 更新Address记录
//@param: address *model.Address
//@return: err error

func UpdateAddress(address model.Address) (err error) {
	err = global.GVA_DB.Save(&address).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetAddress
//@description: 根据id获取Address记录
//@param: id uint
//@return: err error, address model.Address

func GetAddress(id uint) (err error, address model.Address) {
	err = global.GVA_DB.Where("id = ?", id).First(&address).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetAddressInfoList
//@description: 分页获取Address记录
//@param: info request.AddressSearch
//@return: err error, list interface{}, total int64

func GetAddressInfoList(info request.AddressSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.Address{})
	var addresss []model.Address
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.Mid != 0 {
		db = db.Where("`mid` = ?", info.Mid)
	}
	if info.Mobile != "" {
		db = db.Where("`mobile` = ?", info.Mobile)
	}
	if info.Name != "" {
		db = db.Where("`name` = ?", info.Name)
	}
	if info.CountryId != 0 {
		db = db.Where("`countryId` = ?", info.CountryId)
	}
	if info.CountryName != "" {
		db = db.Where("`country_name` = ?", info.CountryName)
	}
	if info.ProvinceId != 0 {
		db = db.Where("`province_id` = ?", info.ProvinceId)
	}
	if info.ProvinceName != "" {
		db = db.Where("`province_name` = ?", info.ProvinceName)
	}
	if info.CityId != 0 {
		db = db.Where("`city_id` = ?", info.CityId)
	}
	if info.CityName != "" {
		db = db.Where("`city_name` = ?", info.CityName)
	}
	if info.CountyId != 0 {
		db = db.Where("`county_id` = ?", info.CountyId)
	}
	if info.CountyName != "" {
		db = db.Where("`county_name` = ?", info.CountyName)
	}
	if info.StreetId != 0 {
		db = db.Where("`street_id` = ?", info.StreetId)
	}
	if info.StreetName != "" {
		db = db.Where("`street_name` = ?", info.StreetName)
	}
	if info.Detail != "" {
		db = db.Where("`detail` = ?", info.Detail)
	}
	if info.IsDefault != 0 {
		db = db.Where("`is_default` = ?", info.IsDefault)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&addresss).Error
	return err, addresss, total
}
