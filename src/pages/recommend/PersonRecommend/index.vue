<template>
	<div class="personRecommend">
		<!-- banner流 -->
		<el-carousel :interval="400000" type="card" pause-on-hover height="15vw" indicator-position="none" :initial-index="1" v-if="bannerData">
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

:deep .el-carousel__item {
	img {
		width: 100%;
	}
}
</style>
