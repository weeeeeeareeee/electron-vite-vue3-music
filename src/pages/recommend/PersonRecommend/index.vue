<template>
	<div class="personRecommend">
		<!-- 瀑布流 -->
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="item in bannerData" :key="item">
				<img :src="item.imageUrl" />
			</el-carousel-item>
		</el-carousel>
		<CategoryTitle icon="ArrowRight" title="推荐歌单"></CategoryTitle>
	</div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
	name: 'PersonRecommend',
	setup() {
		const bannerData = ref()
		const { proxy } = getCurrentInstance()

		proxy.$request.get('/banner').then((res) => {
			bannerData.value = res.data.banners
		})

		return { bannerData }
	},
}
</script>

<style lang="less" scoped>
@import '../../../assets/css/base.css';
</style>
