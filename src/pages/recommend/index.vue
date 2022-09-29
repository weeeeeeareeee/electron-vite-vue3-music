<template>
	<div>
		<el-tabs tab-position="top" class="recommendTabs" v-model="tabName">
			<el-tab-pane label="个性推荐" :lazy="true" name="个性推荐">
				<PersonRecommend></PersonRecommend>
				<el-button @click="log('歌单')">跳转按钮</el-button>
			</el-tab-pane>
			<el-tab-pane label="歌单" :lazy="true" name="歌单"> 歌单 </el-tab-pane>
			<el-tab-pane label="排行榜" :lazy="true"> 排行榜 </el-tab-pane>
			<el-tab-pane label="歌手" :lazy="true"> 歌手 </el-tab-pane>
			<el-tab-pane label="最新音乐" :lazy="true"> 最新音乐 </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import { ref } from 'vue'
import PersonRecommend from './PersonRecommend/index.vue'
export default {
	components: { PersonRecommend },
	setup() {
		const tabName = ref('个性推荐')
		const log = (name) => {
			tabName.value = name
		}
		return { tabName, log }
	},
}
</script>

<style lang="less" scoped>
:deep .recommendTabs {
	width: 100%;
	height: 100%;
	.el-tabs__nav-wrap {
		&::after {
			display: none;
		}
		.el-tabs__active-bar {
			background-color: #ec4141;
		}
		.el-tabs__item {
			font-size: 16px;
			&:hover {
				color: #ec4141;
			}
		}
		.is-active {
			color: #000;
			font-size: 20px;
		}
	}
}
</style>
