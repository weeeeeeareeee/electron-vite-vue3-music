<template>
  <div class="main">
    <div class="aside">
      <ul>
        <li :class="{active:isActive == index}" v-for="(item,index) in menuList" @click="select(item.key,index)">
          <CustomIcon :name="item.icon"/>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CustomIcon from '../../../components/CustomIcon/index.vue'
import router from '../../../router/index.js'
export default {
  name: 'homeMain',
  components: { CustomIcon },
  setup() {
    const isActive = ref(0)
    const menuList = ref([
      {
        name: '推荐',
        key: 'Recommend',
        icon: 'Flag'
      },
      {
        name: '音乐馆',
        key: 'MusicHall',
        icon: 'Service'
      },
      {
        name: '视频',
        key: 'video',
        icon: 'VideoCamera'
      },
      {
        name: '电台',
        key: 'dj',
        icon: 'Postcard'
      },
      {
        name: '我喜欢',
        key: 'love',
        icon: 'Star'
      },
      {
        name: '本地歌曲',
        key: 'local',
        icon: 'TakeawayBox'
      },
      {
        name: '下载歌曲',
        key: 'download',
        icon: 'Download'
      },
      {
        name: '最近播放',
        key: 'recently',
        icon: 'AlarmClock'
      }
    ])
    const select=(path,index)=>{
      router.push({"name":path})
      isActive.value = index
    }
    return {isActive,menuList,select}
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  height: 100%;
  width: 100%;
  .aside {
    width: 200px;
    padding-top:10px ;
     border-right: 1px solid #c3c3c3;
    // background-color: pink;
    ul {
      li {
        font-size: 18px;
        line-height: 18px;
        padding:10px 0 10px 30px;
        display: flex;
        &:hover {
          background-color: #c3c3c3;
        }
      }
      .active {
        color: #ec4141;
        font-weight: 700;
      }
    }
  }
  .rightBox {
    padding: 10px 30px;
    width: 100%;
  }
}
</style>
