<template>
	<div class="Category">
		<div class="CategoryTitle">
			{{ title }}
			<CustomIcon :name="icon" :size="size"></CustomIcon>
		</div>
		<div class="CategoryBox"></div>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'Category',
	props: {
		title: String,
		icon: String,
		size: String,
	},
	setup() {},
}
</script>

<style lang="less" scoped>
.Category {
	.CategoryTitle {
		font-size: 20px;
		font-weight: 700;
		line-height: 30px;
		cursor: pointer;
		text-align: left;
	}
	.CategoryBox {
	}
}
</style>
