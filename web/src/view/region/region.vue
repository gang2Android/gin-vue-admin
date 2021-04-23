<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item label="区域id">
          <el-input placeholder="搜索条件" v-model="searchInfo.code" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="地区名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.name" style="width: 150px;"></el-input>
        </el-form-item>
        <el-form-item label="上级code">
          <el-input placeholder="搜索条件" v-model="searchInfo.pcode" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="级别">
          <!--          <el-input placeholder="搜索条件" v-model="searchInfo.level" style="width: 100px;"></el-input>-->
          <el-select v-model="searchInfo.level" placeholder="请选择" clearable style="width: 100px;">
            <el-option v-for="(item, index) in regionLevel" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="坐标">
          <el-input placeholder="搜索条件" v-model="searchInfo.lng_lat" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">新增行政区域</el-button>
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

      <el-table-column label="区域id" prop="code" width="60" align="center"></el-table-column>

      <el-table-column label="地区名称" prop="name" width="120" align="center"></el-table-column>

      <el-table-column label="上级code" prop="pcode" width="80" align="center"></el-table-column>

      <el-table-column label="级别" prop="level" width="70" :formatter="formatLevel" align="center"></el-table-column>

      <el-table-column label="坐标" prop="lng_lat" width="180" align="center"></el-table-column>

      <el-table-column label="排序" prop="sort" width="50" align="center"></el-table-column>

      <el-table-column label="按钮组">
        <template slot-scope="scope">
          <el-button class="table-button" @click="updateRegion(scope.row)" size="small" type="primary"
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

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="弹窗操作">
      <el-form ref="elForm" :model="formData" :rules="rules" label-position="right" label-width="100px">
        <el-form-item label="区域id:" prop="code">
          <el-input v-model.number="formData.code" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="地区名称:" prop="name">
          <el-input v-model="formData.name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="上级code:" prop="pcode">
          <el-input v-model.number="formData.pcode" clearable placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="级别:">
          <el-select v-model="formData.level" placeholder="请选择" clearable style="width: 100%;">
            <el-option v-for="(item, index) in regionLevel" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="坐标:">
          <el-input v-model="formData.lng_lat" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="排序:">
          <el-input v-model.number="formData.sort" clearable placeholder="请输入"></el-input>
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
  createRegion,
  deleteRegion,
  deleteRegionByIds,
  updateRegion,
  findRegion,
  getRegionList
} from "@/api/region";  //  此处请自行替换地址
import {formatTimeToStr} from "@/utils/date";
import infoList from "@/mixins/infoList";

export default {
  name: "Region",
  mixins: [infoList],
  data() {
    return {
      listApi: getRegionList,
      dialogFormVisible: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [], formData: {
        code: 0,
        name: "",
        pcode: 0,
        level: 1,
        lng_lat: "",
        sort: 0,
      },
      regionLevel: [],
      rules: {
        code: [{
          required: true,
          message: '请输入区域id',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '请输入区域名称',
          trigger: 'blur'
        }],
        pcode: [{
          required: true,
          message: '请输入上级区域id',
          trigger: 'blur'
        }],
      },
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
        this.deleteRegion(row);
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
      const res = await deleteRegionByIds({ids})
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
    async updateRegion(row) {
      const res = await findRegion({ID: row.ID});
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.reregion;
        this.dialogFormVisible = true;
      }
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
        code: 0,
        name: "",
        pcode: 0,
        level: 1,
        lng_lat: "",
        sort: 0,
      };
    },
    async deleteRegion(row) {
      const res = await deleteRegion({ID: row.ID});
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
            res = await createRegion(that.formData);
            break;
          case "update":
            res = await updateRegion(that.formData);
            break;
          default:
            res = await createRegion(that.formData);
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
    formatLevel(row) {
      let name = "";
      this.regionLevel.some(function (item) {
        if (row.level === item.value) {
          name = item.label;
          return true;
        }
      });
      return name;
    },
  },
  async created() {
    await this.getTableData();
    this.regionLevel = await this.getDict('region_level')
  }
};
</script>

<style>
</style>
