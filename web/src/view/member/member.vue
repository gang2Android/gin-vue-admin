<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input placeholder="搜索条件" v-model="searchInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input placeholder="搜索条件" v-model="searchInfo.mobile"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInfo.status" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="级别">
          <el-select v-model="searchInfo.level_id" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in mLevelOptions" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐人id">
          <el-input placeholder="推荐人id" v-model="searchInfo.pid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">新增会员</el-button>
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
    <el-table :data="tableData" @selection-change="handleSelectionChange" border ref="multipleTable" stripe
              style="width: 100%" tooltip-effect="dark">

      <el-table-column type="selection" width="35"></el-table-column>

      <el-table-column label="Id" prop="ID" width="40" align="center"></el-table-column>

      <el-table-column label="注册时间" width="180">
        <template slot-scope="scope">{{ scope.row.CreatedAt|formatDate }}</template>
      </el-table-column>

      <el-table-column label="头像" width="70" prop="img">
        <template slot-scope="scope">
          <el-image
              style="width: 40px; height: 40px"
              :src="scope.row.img"
              :preview-src-list="[scope.row.img]">
            <div slot="error" class="image-slot">
              <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                         style="width: 40px; height: 40px"/>
            </div>
          </el-image>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="120" prop="name"></el-table-column>

      <el-table-column label="手机号" prop="mobile" width="120"></el-table-column>

      <el-table-column label="状态" prop="status" width="70" align="center" :formatter="formatStatus"></el-table-column>

      <el-table-column label="级别" prop="level_id" width="70" align="center" :formatter="formatLevel"></el-table-column>

      <el-table-column label="推荐人Id" prop="pid" width="90" align="center"></el-table-column>

      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button class="table-button" @click="updateMember(scope.row)" size="small" type="primary"
                     icon="el-icon-edit">变更
          </el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination :current-page="page" :page-size="pageSize" :page-sizes="[10, 30, 50, 100]"
                   :style="{float:'right',padding:'20px'}"
                   :total="total" @current-change="handleCurrentChange" @size-change="handleSizeChange"
                   layout="total, sizes, prev, pager, next, jumper"></el-pagination>

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="">
      <el-form ref="elForm" :model="formData" :rules="rules" label-position="right" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" placeholder="请输入" :maxlength="10" clearable prefix-icon='el-icon-user'
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                    prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formData.status" placeholder="请选择" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="级别">
          <el-select v-model="formData.level_id" placeholder="请选择" clearable>
            <el-option v-for="(item, index) in mLevelOptions" :key="index" :label="item.label" :value="item.value"
                       :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐人Id">
          <el-input v-model.number="formData.pid" clearable placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="pwd_login">
          <el-input v-model="formData.pwd_login" placeholder="请输入登录密码" clearable show-password
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="支付密码" prop="pwd_pay">
          <el-input v-model="formData.pwd_pay" placeholder="请输入支付密码" clearable show-password
                    :style="{width: '100%'}"></el-input>
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
  createMember,
  deleteMember,
  deleteMemberByIds,
  updateMember,
  findMember,
  getMemberList
} from "@/api/member"; //  此处请自行替换地址
import {
  formatTimeToStr
} from "@/utils/date";
import infoList from "@/mixins/infoList";

export default {
  name: "Member",
  mixins: [infoList],
  data() {
    return {
      listApi: getMemberList,
      dialogFormVisible: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [],
      formData: {
        name: "",
        img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        mobile: "",
        status: 1,
        level_id: 1,
        pid: 0,
        pwd_login: "",
        pwd_pay: "",
      },
      rules: {
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }],
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        pwd_login: [{
          required: false,
          message: '请输入登录密码',
          trigger: 'blur'
        }],
        pwd_pay: [{
          required: false,
          message: '请输入支付密码',
          trigger: 'blur'
        }],
      },
      statusOptions: [],
      mLevelOptions: [],
    };
  },
  filters: {
    formatDate: function (time) {
      if (time != null && time != "") {
        const date = new Date(time);
        return formatTimeToStr(date, "yyyy-MM-dd hh:mm:ss");
      } else {
        return "";
      }
    },
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
        this.deleteMember(row);
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
      const res = await deleteMemberByIds({
        ids
      })
      if (res.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        if (this.tableData.length == ids.length) {
          this.page--;
        }
        this.deleteVisible = false
        this.getTableData()
      }
    },
    async updateMember(row) {
      const res = await findMember({
        ID: row.ID
      });
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.remember;
        this.formData.pwd_login = ""
        this.formData.pwd_pay = ""
        this.dialogFormVisible = true;
      }
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
        name: "",
        mobile: "",
        status: 1,
        level_id: 1,
        pwd_login: "",
        pwd_pay: "",
      };
    },
    async deleteMember(row) {
      const res = await deleteMember({
        ID: row.ID
      });
      if (res.code == 0) {
        this.$message({
          type: "success",
          message: "删除成功"
        });
        if (this.tableData.length == 1) {
          this.page--;
        }
        this.getTableData();
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
        let rep;
        switch (that.type) {
          case "create":
            rep = await createMember(that.formData);
            break;
          case "update":
            rep = await updateMember(that.formData);
            break;
          default:
            rep = await createMember(that.formData);
            break;
        }
        if (rep.code === 0) {
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
    formatStatus(row) {
      let name = "";
      this.statusOptions.some(function (item) {
        if (row.status === item.value) {
          name = item.label;
          return true;
        }
      });
      return name;
    },
    formatLevel(row) {
      let name = "";
      this.mLevelOptions.some(function (item) {
        if (row.level_id === item.value) {
          name = item.label;
          return true;
        }
      });
      return name;
    },
  },
  async created() {
    await this.getTableData();
    this.statusOptions = await this.getDict('memberStatus')
    this.mLevelOptions = await this.getDict('memberLevel')
    console.log(this.mLevelOptions)
  }
};
</script>

<style>
</style>
