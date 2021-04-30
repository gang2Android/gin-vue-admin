<template>
<div>
    <el-form :model="formData" label-position="right" label-width="80px">
             <el-form-item label="新媒体id:"><el-input v-model.number="formData.news_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="会员id:"><el-input v-model.number="formData.user_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="会员昵称:">
                <el-input v-model="formData.user_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="会员头像:">
                <el-input v-model="formData.user_img" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="评论内容:">
                <el-input v-model="formData.content" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="点赞数:"><el-input v-model.number="formData.like_count" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="点赞会员id:">
                <el-input v-model="formData.like_user_ids" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="回复的评论id:"><el-input v-model.number="formData.up_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="下面回复的评论ids:">
                <el-input v-model="formData.next_ids" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="是否启用:">
                <el-switch active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否" v-model="formData.is_open" clearable ></el-switch>
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
    createNewsComments,
    updateNewsComments,
    findNewsComments
} from "@/api/news_comments";  //  此处请自行替换地址
import infoList from "@/mixins/infoList";
export default {
  name: "NewsComments",
  mixins: [infoList],
  data() {
    return {
      type: "",formData: {
            news_id:0,
            user_id:0,
            user_name:"",
            user_img:"",
            content:"",
            like_count:0,
            like_user_ids:"",
            up_id:0,
            next_ids:"",
            is_open:false,
            
      }
    };
  },
  methods: {
    async save() {
      let res;
      switch (this.type) {
        case "create":
          res = await createNewsComments(this.formData);
          break;
        case "update":
          res = await updateNewsComments(this.formData);
          break;
        default:
          res = await createNewsComments(this.formData);
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
    const res = await findNewsComments({ ID: this.$route.query.id })
    if(res.code == 0){
       this.formData = res.data.renewsComments
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