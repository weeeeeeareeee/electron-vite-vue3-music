<template>
	<el-container class="homePage">
		<el-header>
			<HomeHeader />
		</el-header>
		<el-main width="100%">
			<HomeMain />
		</el-main>
	</el-container>
</template>

<script>
import HomeHeader from './HomeHeader/index.vue'
import HomeMain from './HomeMain/index.vue'
export default {
	components: { HomeHeader, HomeMain },
	setup() {},
}
</script>

<style lang="less" scoped>
.homePage {
	height: 100%;
	width: 100%;
	:deep .el-header {
		--el-header-padding: 0;
		height: 50px;
	}
	:deep .el-main {
		--el-main-padding: 0;
	}
}
</style>
