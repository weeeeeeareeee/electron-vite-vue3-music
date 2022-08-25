<template>
  <div class="homePage">
    <el-container>
      <el-header><HomeHeader /></el-header>
      <el-main width="100%"><HomeAside></HomeAside></el-main>
    </el-container>
  </div>
  
</template>

<script>
import HomeHeader from './HomeHeader/index.vue'
import HomeAside from './HomeAside/index.vue'
export default {
  components: { HomeHeader, HomeAside },
  setup() {}
}
</script>

<style  scoped>
.el-container {
  height: 100vh;
}
::v-deep .el-header {
   --el-header-padding:0;
   height: 50px;
}
::v-deep .el-main {
  --el-main-padding:0
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