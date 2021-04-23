<template>
<div>
    <el-form :model="formData" label-position="right" label-width="80px">
             <el-form-item label="会员id:"><el-input v-model.number="formData.mid" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="国家id:"><el-input v-model.number="formData.country_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="国家名称:">
                <el-input v-model="formData.country_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="省id:"><el-input v-model.number="formData.province_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="省名称:">
                <el-input v-model="formData.province_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="市id:"><el-input v-model.number="formData.city_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="区id:"><el-input v-model.number="formData.county_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="区名称:">
                <el-input v-model="formData.county_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="街道id:"><el-input v-model.number="formData.street_id" clearable placeholder="请输入"></el-input>
          </el-form-item>
           
             <el-form-item label="街道名称:">
                <el-input v-model="formData.street_name" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="详细地址:">
                <el-input v-model="formData.detail" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="手机号:">
                <el-input v-model="formData.mobile" clearable placeholder="请输入" ></el-input>
          </el-form-item>
           
             <el-form-item label="收货人姓名:">
                <el-input v-model="formData.name" clearable placeholder="请输入" ></el-input>
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
    createAddress,
    updateAddress,
    findAddress
} from "@/api/address";  //  此处请自行替换地址
import infoList from "@/mixins/infoList";
export default {
  name: "Address",
  mixins: [infoList],
  data() {
    return {
      type: "",formData: {
            mid:0,
            country_id:0,
            country_name:"",
            province_id:0,
            province_name:"",
            city_id:0,
            county_id:0,
            county_name:"",
            street_id:0,
            street_name:"",
            detail:"",
            mobile:"",
            name:"",
            
      }
    };
  },
  methods: {
    async save() {
      let res;
      switch (this.type) {
        case "create":
          res = await createAddress(this.formData);
          break;
        case "update":
          res = await updateAddress(this.formData);
          break;
        default:
          res = await createAddress(this.formData);
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
    const res = await findAddress({ ID: this.$route.query.id })
    if(res.code == 0){
       this.formData = res.data.readdress
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