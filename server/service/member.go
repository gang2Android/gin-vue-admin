package service

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/model/request"
	"gin-vue-admin/utils"
)

//@author: [piexlmax](https://github.com/piexlmax)
//@function: CreateMember
//@description: 创建Member记录
//@param: member model.Member
//@return: err error

func CreateMember(member model.Member) (err error) {
	if member.PwdLogin != "" {
		member.PwdLogin = utils.MD5V([]byte("123456"))
	}
	if member.PwdPay != "" {
		member.PwdPay = utils.MD5V([]byte("123456"))
	}
	err = global.GVA_DB.Create(&member).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteMember
//@description: 删除Member记录
//@param: member model.Member
//@return: err error

func DeleteMember(member model.Member) (err error) {
	err = global.GVA_DB.Delete(&member).Error
	return err
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: DeleteMemberByIds
//@description: 批量删除Member记录
//@param: ids request.IdsReq
//@return: err error

func DeleteMemberByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.Member{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateMember @author: [piexlmax](https://github.com/piexlmax)
//@function: UpdateMember
//@description: 更新Member记录
//@param: member *model.Member
//@return: err error
func UpdateMember(member model.Member) (err error) {
	if member.PwdLogin != "" {
		member.PwdLogin = utils.MD5V([]byte(member.PwdLogin))
	}
	if member.PwdPay != "" {
		member.PwdPay = utils.MD5V([]byte(member.PwdPay))
	}
	err = global.GVA_DB.Save(&member).Error
	return err
}

// GetMember @author: [piexlmax](https://github.com/piexlmax)
//@function: GetMember
//@description: 根据id获取Member记录
//@param: id uint
//@return: err error, member model.Member
func GetMember(id uint) (err error, member model.Member) {
	err = global.GVA_DB.Where("id = ?", id).First(&member).Error
	return
}

//@author: [piexlmax](https://github.com/piexlmax)
//@function: GetMemberInfoList
//@description: 分页获取Member记录
//@param: info request.MemberSearch
//@return: err error, list interface{}, total int64

func GetMemberInfoList(info request.MemberSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&model.Member{})
	var members []model.Member
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.Name != "" {
		db = db.Where("`name` = ?", info.Name)
	}
	if info.Mobile != "" {
		db = db.Where("`mobile` = ?", info.Mobile)
	}
	if info.Status != 0 {
		db = db.Where("`status` = ?", info.Status)
	}
	if info.LevelId != 0 {
		db = db.Where("`level_id` = ?", info.LevelId)
	}
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&members).Error
	return err, members, total
}
