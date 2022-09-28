<template>
	<el-carousel :interval="4000" type="card" height="200px">
		<el-carousel-item v-for="item in bannerData" :key="item">
			<img :src="item.imageUrl" />
		</el-carousel-item>
	</el-carousel>
</template>

<script>
import { ref } from 'vue'
import request from '../../../../utils/Request.js'
export default {
	name: 'RotationChart',
	setup() {
		const bannerData = ref()

		request.get('/banner').then((res) => {
			bannerData.value = res.data.banners
		})

		return { bannerData }
	},
}
</script>

<style lang="less" scoped>
img {
	height: 80%;
	border-radius: 10px;
}
::v-deep .el-carousel__button {
	width: 10px;
	height: 10px;
	border-radius: 5px;
}
</style>
