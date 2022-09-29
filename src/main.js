//构建基础框架
import { createApp, h } from 'vue'
import App from './App.vue'
const app = createApp({ render: () => h(App) })

//导入router
import Router from './router/index.js'
app.use(Router)

//elementPlus样式导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

//自动导入components组件
import autoRegisterComponents from './utils/autoRegisterComponents'
app.use(autoRegisterComponents)

// 全局挂载axios
import request from './utils/Request'
app.config.globalProperties.$request = request

// import './samples/node-api'
app.mount('#app').$nextTick(() => {
	postMessage({ payload: 'removeLoading' }, '*')
})
