<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline" label-width="90px">
        <el-form-item label="会员id">
          <el-input placeholder="搜索条件" v-model="searchInfo.mid"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input placeholder="搜索条件" v-model="searchInfo.mobile"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名">
          <el-input placeholder="搜索条件" v-model="searchInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="国家id">
          <el-input placeholder="搜索条件" v-model="searchInfo.country_id"></el-input>
        </el-form-item>
        <el-form-item label="国家名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.country_name"></el-input>
        </el-form-item>
        <el-form-item label="省id">
          <el-input placeholder="搜索条件" v-model="searchInfo.province_id"></el-input>
        </el-form-item>
        <el-form-item label="省名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.province_name"></el-input>
        </el-form-item>
        <el-form-item label="市id">
          <el-input placeholder="搜索条件" v-model="searchInfo.city_id"></el-input>
        </el-form-item>
        <el-form-item label="市名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.city_name"></el-input>
        </el-form-item>
        <el-form-item label="区id">
          <el-input placeholder="搜索条件" v-model="searchInfo.county_id"></el-input>
        </el-form-item>
        <el-form-item label="区名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.county_name"></el-input>
        </el-form-item>
        <el-form-item label="街道id">
          <el-input placeholder="搜索条件" v-model="searchInfo.street_id"></el-input>
        </el-form-item>
        <el-form-item label="街道名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.street_name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input placeholder="搜索条件" v-model="searchInfo.detail"></el-input>
        </el-form-item>
        <el-form-item label="默认地址">
          <el-select v-model="searchInfo.is_default" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in trueOrFalse" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">新增address</el-button>
        </el-form-item>
        <el-form-item>
          <el-popover placement="top" v-model="deleteVisible" width="160">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button @click="deleteVisible = false" size="mini" type="text">取消</el-button>
              <el-button @click="onDelete" size="mini" type="primary">确定</el-button>
            </div>
            <el-button icon="el-icon-delete" size="mini" slot="reference" type="danger">批量删除</el-button>
          </el-popover>
        </el-form-item>
      </el-form>
    </div>
    <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        border
        ref="multipleTable"
        stripe
        style="width: 100%"
        tooltip-effect="dark"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">{{ scope.row.CreatedAt|formatDate }}</template>
      </el-table-column>

      <el-table-column label="会员id" prop="mid" width="60" align="center"></el-table-column>

      <el-table-column label="手机号" prop="mobile" width="120"></el-table-column>

      <el-table-column label="收货人姓名" prop="name" width="120"></el-table-column>

      <el-table-column label="国家名称" prop="country_name" width="120"></el-table-column>

      <el-table-column label="省名称" prop="province_name" width="120"></el-table-column>

      <el-table-column label="市名称" prop="city_name" width="120"></el-table-column>

      <el-table-column label="区名称" prop="county_name" width="120"></el-table-column>

      <el-table-column label="街道名称" prop="street_name" width="120"></el-table-column>

      <el-table-column label="详细地址" prop="detail" width="120"></el-table-column>

      <el-table-column label="默认地址" prop="is_default" required :formatter="formatDefault" width="80" align="center"></el-table-column>

      <el-table-column label="按钮组">
        <template slot-scope="scope">
          <el-button class="table-button" @click="updateAddress(scope.row)" size="small" type="primary"
                     icon="el-icon-edit">变更
          </el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :style="{float:'right',padding:'20px'}"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible">
      <el-form ref="elForm" :model="formData" label-position="right" label-width="100px" :rules="rules">
        <el-form-item label="会员id:" prop="mid">
          <el-input v-model.number="formData.mid" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="手机号:" prop="mobile">
          <el-input v-model="formData.mobile" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="收货人姓名:" prop="name">
          <el-input v-model="formData.name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="国家id:" prop="country_id">
          <el-input v-model.number="formData.country_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="国家名称:" prop="country_name">
          <el-input v-model="formData.country_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="省id:" prop="province_id">
          <el-input v-model.number="formData.province_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="省名称:" prop="province_name">
          <el-input v-model="formData.province_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="市id:" prop="city_id">
          <el-input v-model.number="formData.city_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="市名称:" prop="city_name">
          <el-input v-model="formData.city_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="区id:" prop="county_id">
          <el-input v-model.number="formData.county_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="区名称:" prop="county_name">
          <el-input v-model="formData.county_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="街道id:" prop="street_id">
          <el-input v-model.number="formData.street_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="街道名称:" prop="street_name">
          <el-input v-model="formData.street_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="详细地址:" prop="detail">
          <el-input v-model="formData.detail" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="默认地址:" prop="is_default">
          <el-select v-model="formData.is_default" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in trueOrFalse" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  createAddress,
  deleteAddress,
  deleteAddressByIds,
  updateAddress,
  findAddress,
  getAddressList
} from "@/api/address";  //  此处请自行替换地址
import {formatTimeToStr} from "@/utils/date";
import infoList from "@/mixins/infoList";

export default {
  name: "Address",
  mixins: [infoList],
  data() {
    return {
      listApi: getAddressList,
      dialogFormVisible: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [], formData: {
        mid: 0,
        mobile: "",
        name: "",
        country_id: 0,
        country_name: "",
        province_id: 0,
        province_name: "",
        city_id: 0,
        city_name: "",
        county_id: 0,
        county_name: "",
        street_id: 0,
        street_name: "",
        detail: "",
        is_default: 1,
      },
      rules: {
        mid: [{
          required: true,
          message: '请输入会员id',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '请输入收货人姓名',
          trigger: 'blur'
        }],
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }],
        country_id: [{
          required: true,
          message: '请输入国家id',
          trigger: 'blur'
        }],
        country_name: [{
          required: true,
          message: '请输入国家名称',
          trigger: 'blur'
        }],
        province_id: [{
          required: true,
          message: '请输入省id',
          trigger: 'blur'
        }],
        province_name: [{
          required: true,
          message: '请输入省名称',
          trigger: 'blur'
        }],
        city_id: [{
          required: true,
          message: '请输入市id',
          trigger: 'blur'
        }],
        city_name: [{
          required: true,
          message: '请输入市名称',
          trigger: 'blur'
        }],
        county_id: [{
          required: true,
          message: '请输入区id',
          trigger: 'blur'
        }],
        county_name: [{
          required: true,
          message: '请输入区名称',
          trigger: 'blur'
        }],
        street_id: [{
          required: true,
          message: '请输入街道id',
          trigger: 'blur'
        }],
        street_name: [{
          required: true,
          message: '请输入街道名称',
          trigger: 'blur'
        }],
        detail: [{
          required: true,
          message: '请输入详细地址',
          trigger: 'blur'
        }],
      },
      trueOrFalse: [],
    };
  },
  filters: {
    formatDate: function (time) {
      if (time != null && time != "") {
        var date = new Date(time);
        return formatTimeToStr(date, "yyyy-MM-dd hh:mm:ss");
      } else {
        return "";
      }
    },
    formatBoolean: function (bool) {
      if (bool != null) {
        return bool ? "是" : "否";
      } else {
        return "";
      }
    }
  },
  methods: {
    //条件搜索前端看此方法
    onSubmit() {
      this.page = 1
      this.pageSize = 10
      this.getTableData()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    deleteRow(row) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteAddress(row);
      });
    },
    async onDelete() {
      const ids = []
      if (this.multipleSelection.length == 0) {
        this.$message({
          type: 'warning',
          message: '请选择要删除的数据'
        })
        return
      }
      this.multipleSelection &&
      this.multipleSelection.map(item => {
        ids.push(item.ID)
      })
      const res = await deleteAddressByIds({ids})
      if (res.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        if (this.tableData.length == ids.length) {
          this.page--;
        }
        this.deleteVisible = false
        await this.getTableData()
      }
    },
    async updateAddress(row) {
      const res = await findAddress({ID: row.ID});
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.readdress;
        this.dialogFormVisible = true;
      }
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
        mid: 0,
        mobile: "",
        name: "",
        country_id: 0,
        country_name: "",
        province_id: 0,
        province_name: "",
        city_id: 0,
        city_name: "",
        county_id: 0,
        county_name: "",
        street_id: 0,
        street_name: "",
        detail: "",
        is_default: 1,
      };
    },
    async deleteAddress(row) {
      const res = await deleteAddress({ID: row.ID});
      if (res.code == 0) {
        this.$message({
          type: "success",
          message: "删除成功"
        });
        if (this.tableData.length == 1) {
          this.page--;
        }
        await this.getTableData();
      }
    },
    async enterDialog() {
      const that = this;
      this.$refs['elForm'].validate().then(res => {
        if (!res) return false
        return true
      }).then(async function (value2) {
        console.log(value2)
        if (!value2) {
          return
        }
        let res;
        switch (that.type) {
          case "create":
            res = await createAddress(that.formData);
            break;
          case "update":
            res = await updateAddress(that.formData);
            break;
          default:
            res = await createAddress(that.formData);
            break;
        }
        if (res.code == 0) {
          that.$message({
            type: "success",
            message: "创建/更改成功"
          })
          that.closeDialog();
          await that.getTableData();
        }
      })
    },
    openDialog() {
      this.type = "create";
      this.dialogFormVisible = true;
    },
    formatDefault(row) {
      let name = "";
      this.trueOrFalse.some(function (item) {
        if (row.is_default === item.value) {
          name = item.label;
          return true;
        }
      });
      return name;
    },
  },
  async created() {
    await this.getTableData();
    this.trueOrFalse = await this.getDict('trueorfalse')
  }
};
</script>

<style>
</style>
