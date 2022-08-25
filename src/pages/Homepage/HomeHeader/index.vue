<template>
  <div class="header">
    <div class="left">
      <a href="#"><img src="../../../assets/img/logo.ico" alt="" />芜湖云音乐</a>
    </div>
    <div class="mid">
      <div class="history">
        <a href=""
          ><el-icon><ArrowLeft /></el-icon
        ></a>
        <a href=""
          ><el-icon><ArrowRight /></el-icon
        ></a>
      </div>
      <el-input v-model="songSearch" placeholder="请输入搜索歌曲" />
    </div>
    <div class="right">
      <div class="user">
        <a href="">
          <el-icon><Avatar /></el-icon>
        </a>
        <label for="">
          未登录
          <el-icon><CaretBottom /></el-icon>
        </label>
      </div>
      <div class="operation">
        <a href="#"
          ><el-icon><Setting /></el-icon
        ></a>
        <a href="#"
          ><el-icon><Message /></el-icon
        ></a>

        <a href="#" @click="narrowWindow"
          ><el-icon><Minus /></el-icon
        ></a>
        <a href="#" @click="fullWindow"
          ><el-icon><FullScreen /></el-icon
        ></a>
        <a href="#" @click="closeWindow"
          ><el-icon><Close /></el-icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ipcRenderer } from "electron";
export default {
  name: "homeHeader",
  setup() {
    let songSearch = ref("");
    // 缩小，全屏，关闭
    function narrowWindow() {
      ipcRenderer.send("narrowWindow");
    }
    function fullWindow() {
      ipcRenderer.send("fullWindow");
    }
    function closeWindow() {
      ipcRenderer.send("closeWindow");
    }
    return { songSearch, closeWindow, narrowWindow, fullWindow };
  }
};
</script>

<style lang="less" scoped>
.header {
  -webkit-app-region: drag;
  // -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ec4141;
  .left {
    -webkit-app-region: no-drag;
    a {
      img {
        width: 30px;
        color: white;
        margin: 0px 5px 0 10px;
        vertical-align: middle;
      }
      text-decoration: none;
      color: white;
      font-size: 16px;
      line-height: 50px;
    }
  }
  .mid {
    -webkit-app-region: no-drag;
    display: flex;
    .history {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: white;
        margin-right: 10px;
        .el-icon {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background-color: #d93b3b;
        }
      }
    }
    :deep(.el-input__wrapper) {
      border: 0;
      box-shadow: none;
      border-radius: 20px;
      background-color: #e33e3e;
      .el-input__prefix {
        color: #f3aaaa;
      }
      .el-input__inner {
        color: #fff;
        &::placeholder {
          color: #ee9886;
        }
      }
    }
  }
  .right {
    display: flex;
    -webkit-app-region: no-drag;
    font-size: 14px;
    .user {
      a {
        color: #fff;
        .el-icon {
          size: 30px;
          vertical-align: middle;
        }
      }
      color: #fff;
      margin-right: 3vw;
    }
    .operation {
      a {
        margin-right: 20px;
        .el-icon {
          color: #ffffff;
          // margin-right: 20px;
        }
      }
    }
  }
}
</style>
