package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateMemberLevel
//@description: 创建MemberLevel记录
//@param: memberLevel model.MemberLevel
//@return: err error

func CreateMemberLevel(memberLevel model.MemberLevel) (err error) {
	err = global.GVA_DB.Create(&memberLevel).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteMemberLevel
//@description: 删除MemberLevel记录
//@param: memberLevel model.MemberLevel
//@return: err error

func DeleteMemberLevel(memberLevel model.MemberLevel) (err error) {
	err = global.GVA_DB.Delete(&memberLevel).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteMemberLevelByIds
//@description: 批量删除MemberLevel记录
//@param: ids request.IdsReq
//@return: err error

func DeleteMemberLevelByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.MemberLevel{}, "id in ?", ids.Ids).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateMemberLevel
//@description: 更新MemberLevel记录
//@param: memberLevel *model.MemberLevel
//@return: err error

func UpdateMemberLevel(memberLevel model.MemberLevel) (err error) {
	err = global.GVA_DB.Save(&memberLevel).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetMemberLevel
//@description: 根据id获取MemberLevel记录
//@param: id uint
//@return: err error, memberLevel model.MemberLevel

func GetMemberLevel(id uint) (err error, memberLevel model.MemberLevel) {
	err = global.GVA_DB.Where("id = ?", id).First(&memberLevel).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetMemberLevelInfoList
//@description: 分页获取MemberLevel记录
//@param: info request.MemberLevelSearch
//@return: err error, list interface{}, total int64

func GetMemberLevelInfoList(info request.MemberLevelSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.MemberLevel{})
	var memberLevels []model.MemberLevel
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.Name != "" {
		db = db.Where("`name` = ?", info.Name)
	}
	if info.IsOpen != nil {
		db = db.Where("`is_open` = ?", info.IsOpen)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&memberLevels).Error
	return err, memberLevels, total
}
