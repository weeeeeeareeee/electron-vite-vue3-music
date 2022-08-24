<template>
  <div class="menuList" v-for="item in menuList" :key="item.id">
    <p class="title">{{ item.name }}</p>
    <el-icon name="setting"></el-icon>
    <div class="list" v-for="menus in item.menus" :key="menus.key">
      <CustomIcon :name="menus.icon" v-if="menus.icon"></CustomIcon>
      {{ menus.name }}
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import CustomIcon from "@/components/CustomIcon/index.vue";
let menuList = ref([]);
export default {
  name: "menuList",
  components: { CustomIcon },
  setup() {
    menuList = [
      {
        id: 1,
        // name: "在线音乐",
        menus: [
          {
            name: "推荐",
            key: "discover",
            icon: "Flag"
          },
          {
            name: "音乐馆",
            key: "music",
            icon: "Service"
          },
          {
            name: "视频",
            key: "video",
            icon: "VideoCamera"
          },
          {
            name: "电台",
            key: "dj",
            icon: "Postcard"
          }
        ]
      },
      {
        id: 2,
        name: "我的音乐",
        menus: [
          {
            name: "我喜欢",
            key: "love",
            icon: "Star"
          },
          {
            name: "本地歌曲",
            key: "local",
            icon: "TakeawayBox"
          },
          {
            name: "下载歌曲",
            key: "download",
            icon: "Download"
          },
          {
            name: "最近播放",
            key: "recently",
            icon: "AlarmClock"
          }
        ]
      }
    ];
    onMounted(() => {
      // 遍历div元素，给所有的div盒子加上点击事件。
      let list = document.querySelectorAll(".list");
      list[0].classList.add("active");
      list.forEach((item) => {
        item.addEventListener("click", () => {
          clearClassName();
          item.classList.add("active");
        });
      });
      function clearClassName() {
        list.forEach((item) => {
          item.classList.remove("active");
        });
      }
    });
    return { menuList };
  }
};
</script>

<style lang="less" scoped>
.menuList {
  height: 100%;
  padding-top: 10px;
  margin-left: 10px;
  width: 200px;
  border-right: solid 1px #e0e0e0;
  .title {
    font-size: 14px;
    color: #9f9f9f;
  }
  .list {
    display: flex;
    line-height: 40px;
    align-items: center;
    color: #373737;
    margin-bottom: 1px;
    .el-icon {
      margin-right: 5px;
      margin-left: 5px;
    }
    &:hover {
      background-color: #f6f6f7;
      color: #000;
    }
  }
  .active {
    font-weight: 700;
    background-color: #f6f6f7;
  }
}
</style>
