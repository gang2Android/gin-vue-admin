<template>
<div>
    <el-form :model="formData" label-position="right" label-width="80px">
             <el-form-item label="会员id:"><el-input v-model.number="formData.user_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="会员昵称:">
                <el-input v-model="formData.user_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="会员头像:">
                <el-input v-model="formData.user_img" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="标题:">
                <el-input v-model="formData.title" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="内容描述:">
                <el-input v-model="formData.desc" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="主图/预览图:">
                <el-input v-model="formData.img_main" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="分类id:"><el-input v-model.number="formData.cid" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="分类名称:">
                <el-input v-model="formData.cname" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="图片地址,多个以逗号分隔(,):">
                <el-input v-model="formData.imgs_url" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="视频地址:">
                <el-input v-model="formData.video_url" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="评论数:"><el-input v-model.number="formData.comment_count" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="点赞数:"><el-input v-model.number="formData.like_count" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="收藏数:"><el-input v-model.number="formData.collect_count" clearable placeholder="请输入"></el-input>
          </el-form-item>
           <el-form-item>
           <el-button @click="save" type="primary">保存</el-button>
           <el-button @click="back" type="primary">返回</el-button>
           </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    createNews,
    updateNews,
    findNews
} from "@/api/news";  //  此处请自行替换地址
import infoList from "@/mixins/infoList";
export default {
  name: "News",
  mixins: [infoList],
  data() {
    return {
      type: "",formData: {
            user_id:0,
            user_name:"",
            user_img:"",
            title:"",
            desc:"",
            img_main:"",
            cid:0,
            cname:"",
            imgs_url:"",
            video_url:"",
            comment_count:0,
            like_count:0,
            collect_count:0,
            
      }
    };
  },
  methods: {
    async save() {
      let res;
      switch (this.type) {
        case "create":
          res = await createNews(this.formData);
          break;
        case "update":
          res = await updateNews(this.formData);
          break;
        default:
          res = await createNews(this.formData);
          break;
      }
      if (res.code == 0) {
        this.$message({
          type:"success",
          message:"创建/更改成功"
        })
      }
    },
    back(){
        this.$router.go(-1)
    }
  },
  async created() {
   // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if(this.$route.query.id){
    const res = await findNews({ ID: this.$route.query.id })
    if(res.code == 0){
       this.formData = res.data.renews
       this.type = "update"
     }
    }else{
     this.type = "create"
   }
  
}
};
</script>

<style>
</style>