package app

import (
	"gin-vue-admin/global"
	"gin-vue-admin/model"
	"gin-vue-admin/utils"
)

func Login(u *model.Member) (err error, userInter *model.Member) {
	var user model.Member
	u.PwdLogin = utils.MD5V([]byte(u.PwdLogin))
	err = global.GVA_DB.Where("name = ? AND pwd_login = ?", u.Name, u.PwdLogin).First(&user).Error
	return err, &user
}

func FindUserById(id string) (err error, user model.Member) {
	err = global.GVA_DB.Where("`id` = ?", id).First(&user).Error
	return
}
