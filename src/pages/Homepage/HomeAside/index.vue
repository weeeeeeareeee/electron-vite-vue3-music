<template>
  <div class="Aside">
    <menuList></menuList>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- <el-tabs tab-position="left"  style="height: 100%" class="tabs">
      <el-tab-pane :label="item.name" :lazy="true" v-for="item in menuList" :key="item.key">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon :name="item.icon"></CustomIcon>
            <span>{{item.name}}</span>
          </span>
        </template>
        {{item.name}}
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script>
import menuList from './menuList.vue'
import CustomIcon from '@/components//CustomIcon/index.vue'
export default {
  name: 'homeAside',
  components: { menuList, CustomIcon },
  setup() {
    const menuList = [
      {
        name: '推荐',
        key: 'discover',
        icon: 'Flag'
      },
      {
        name: '音乐馆',
        key: 'music',
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
    ]
    return { menuList }
  }
}
</script>

<style lang="less" scoped>
.Aside {
  // display: flex;
  // flex-direction: row;
  height: 100%;
}
::v-deep .el-tabs__active-bar {
  /* width: 0 !important; */
  background-color: #ec4141 !important;
}
::v-deep .is-active {
  background-color: #f5f5f5;
  font-weight: 700 ;
  color: #ec4141;
}
::v-deep .el-tabs__item {
  text-align: left !important;
}
::v-deep .el-tabs__item:hover {
  color: #ec4141;
}
</style>
