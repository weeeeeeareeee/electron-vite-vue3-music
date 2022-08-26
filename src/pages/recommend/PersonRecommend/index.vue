<template>
  <div class="personRecommend" >
    <RotationChart></RotationChart>
    <CategoryTitle icon="ArrowRight" title="推荐歌单"></CategoryTitle>
  </div>
</template>

<script>
import RotationChart from './RotationChart/index.vue'
import CategoryTitle from '../../../components/CategoryTitle/index.vue'
export default {
  components: { RotationChart,CategoryTitle },
  name: 'PersonRecommend'
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/base.css';
</style>