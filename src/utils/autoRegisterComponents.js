// autoRegister.js
/**
 * 全局组件自动注册
 *
 * 全局组件各个组件按文件夹区分，文件夹名称与组件名无关联，但建议与组件名保持一致
 * 文件夹内至少保留一个文件名为 index 的组件入口，例如 index.vue
 * 组件必须设置 name 并保证其唯一，自动注册会将组件的 name 设为组件名，可参考 SvgIcon 组件写法
 * 如果组件是通过 js 进行调用，则确保组件入口文件为 index.js，可参考 ExampleNotice 组件
 */
// import Vue from 'vue'
// 获取所有的.vue文件
export const getComponentAll = () => {
	// 读取所有的.vue文件
	const files = import.meta.glob('../components/*/*.vue', { eager: true })
	const components = []
	// 找到所有的组件
	for (const key in files) {
		if (Object.prototype.hasOwnProperty.call(files, key)) {
			components.push(files[key].default)
		}
	}
	return components
}

// 自动安装组件
function install(app) {
	// 遍历组件集合,注册组件
	getComponentAll().forEach((Component) => {
		// 注册组件
		app.component(Component.name, Component)
	})
}

export default {
	install,
}
