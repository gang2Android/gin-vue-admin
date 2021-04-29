<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item label="会员id">
          <el-input placeholder="搜索条件" v-model="searchInfo.user_id" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="会员昵称">
          <el-input placeholder="搜索条件" v-model="searchInfo.user_name" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input placeholder="搜索条件" v-model="searchInfo.title" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="分类id">
          <el-input placeholder="搜索条件" v-model="searchInfo.cid" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="分类名称">
          <el-input placeholder="搜索条件" v-model="searchInfo.cname" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="评论数">
          <el-input placeholder="搜索条件" v-model="searchInfo.comment_count" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="点赞数">
          <el-input placeholder="搜索条件" v-model="searchInfo.like_count" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="收藏数">
          <el-input placeholder="搜索条件" v-model="searchInfo.collect_count" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">新增新媒体</el-button>
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
        tooltip-effect="dark">

      <el-table-column type="selection" width="35"></el-table-column>

      <el-table-column label="日期" width="100">
        <template slot-scope="scope">{{ scope.row.CreatedAt|formatDate }}</template>
      </el-table-column>

      <el-table-column label="会员id" prop="user_id" width="70"></el-table-column>

      <el-table-column label="会员昵称" prop="user_name" width="80"></el-table-column>

      <el-table-column label="头像" width="70" prop="user_img">
        <template slot-scope="scope">
          <el-image
              style="width: 40px; height: 40px"
              :src="scope.row.user_img"
              :preview-src-list="[scope.row.user_img]">
            <div slot="error" class="image-slot">
              <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                         style="width: 40px; height: 40px"/>
            </div>
          </el-image>
        </template>
      </el-table-column>

      <!--      <el-table-column label="分类id" prop="cid" width="120"></el-table-column>-->

      <el-table-column label="分类名称" prop="cname" width="80"></el-table-column>

      <el-table-column label="标题" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.title|ellipsis }}</span>
        </template>
      </el-table-column>

      <el-table-column label="内容描述" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.desc|ellipsis }}</span>
        </template>
      </el-table-column>

      <el-table-column label="主图/预览图" width="100" prop="img_main">
        <template slot-scope="scope">
          <el-image
              style="width: 80px; height: auto;"
              :src="scope.row.img_main"
              :preview-src-list="[scope.row.img_main]">
            <div slot="error" class="image-slot">
              <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                         style="width: 40px; height: 40px"/>
            </div>
          </el-image>
        </template>
      </el-table-column>

      <el-table-column label="图片" width="100">
        <template slot-scope="scope">
          <el-image
              style="width: 80px; height: auto;"
              :src="scope.row.imgs_url"
              :preview-src-list="[scope.row.imgs_url]">
            <div slot="error" class="image-slot">
              <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                         style="width: 40px; height: 40px"/>
            </div>
          </el-image>
        </template>
      </el-table-column>

      <el-table-column label="视频" prop="comment_count" width="90" align="center">
        <template slot-scope="scope">
          <el-button class="table-button" @click="openVideo(scope.row.video_url)" size="small"
                     icon="el-icon-video-play">查看
          </el-button>
        </template>
      </el-table-column>

      <el-table-column label="评论数" prop="comment_count" width="70" align="center"></el-table-column>

      <el-table-column label="点赞数" prop="like_count" width="70" align="center"></el-table-column>

      <el-table-column label="收藏数" prop="collect_count" width="70" align="center"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button class="table-button" @click="updateNews(scope.row)" size="small" type="primary"
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

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="操作">
      <el-form ref="elForm" :model="formData" :rules="rules" label-position="right" label-width="100px">
        <el-form-item label="会员id:">
          <el-input v-model.number="formData.user_id" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="会员昵称:">
          <el-input v-model="formData.user_name" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="会员头像:">
          <el-input v-model="formData.user_img" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="标题:">
          <el-input v-model="formData.title" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="内容描述:">
          <el-input v-model="formData.desc" type="textarea" show-word-limit :autosize="{minRows: 4, maxRows: 4}"
                    clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="主图/预览图:">
          <el-input v-model="formData.img_main" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="分类id:">
          <el-input v-model.number="formData.cid" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="分类名称:">
          <el-input v-model="formData.cname" clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="图片地址,多个以逗号分隔(,):">
          <el-input v-model="formData.imgs_url" type="textarea" show-word-limit :autosize="{minRows: 4, maxRows: 4}"
                    clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="视频地址:">
          <el-input v-model="formData.video_url" type="textarea" show-word-limit :autosize="{minRows: 4, maxRows: 4}"
                    clearable placeholder="请输入"></el-input>
        </el-form-item>

        <el-col :span="8">
          <el-form-item label="评论数:" prop="comment_count">
            <el-input-number v-model="formData.comment_count" placeholder="计数器计数器" :step='1' step-strictly
                             :min='0'></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="点赞数:" prop="like_count">
            <el-input-number v-model="formData.like_count" placeholder="计数器计数器" :step='1' step-strictly
                             :min='0'></el-input-number>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="收藏数:" prop="collect_count">
            <el-input-number v-model="formData.collect_count" placeholder="计数器计数器" :step='1' step-strictly
                             :min='0'></el-input-number>
          </el-form-item>
        </el-col>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :before-close="closeVideoDialog" :visible.sync="dialogVideo" title="操作">
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
      ></video-player>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeVideoDialog">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  createNews,
  deleteNews,
  deleteNewsByIds,
  updateNews,
  findNews,
  getNewsList
} from "@/api/news";  //  此处请自行替换地址
import {formatTimeToStr} from "@/utils/date";
import infoList from "@/mixins/infoList";
import {videoPlayer} from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  components: {
    videoPlayer
  },
  name: "News",
  mixins: [infoList],
  data() {
    return {
      listApi: getNewsList,
      dialogFormVisible: false,
      dialogVideo: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [], formData: {
        user_id: 0,
        user_name: "",
        user_img: "",
        title: "",
        desc: "",
        img_main: "",
        cid: 0,
        cname: "",
        imgs_url: "",
        video_url: "",
        comment_count: 0,
        like_count: 0,
        collect_count: 0,
      },
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          src: "",
          type: 'video/mp4'
        }],
        poster: "../../static/images/test.jpg",
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
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
    ellipsis: function (value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.slice(0, 20) + '...'
      }
      return value
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
        this.deleteNews(row);
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
      const res = await deleteNewsByIds({ids})
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
    async updateNews(row) {
      const res = await findNews({ID: row.ID});
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.renews;
        this.dialogFormVisible = true;
      }
    },
    async openVideo(url) {
      this.playerOptions.sources[0].src = url
      this.dialogVideo = true;
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
        user_id: 0,
        user_name: "",
        user_img: "",
        title: "",
        desc: "",
        img_main: "",
        cid: 0,
        cname: "",
        imgs_url: "",
        video_url: "",
        comment_count: 0,
        like_count: 0,
        collect_count: 0,

      };
    },
    closeVideoDialog() {
      this.$refs.videoPlayer.player.pause();
      this.dialogVideo = false;
    },
    async deleteNews(row) {
      const res = await deleteNews({ID: row.ID});
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
          type: "success",
          message: "创建/更改成功"
        })
        this.closeDialog();
        await this.getTableData();
      }
    },
    openDialog() {
      this.type = "create";
      this.dialogFormVisible = true;
    }
  },
  async created() {
    await this.getTableData();

  }
};
</script>

<style>
</style>
