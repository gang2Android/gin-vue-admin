package request

import "gin-vue-admin/model"

type NewsClassifySearch struct{
    model.NewsClassify
    PageInfo
}