import { createApp, h } from 'vue'
import App from './App.vue'
//导入router
import Router from './router/index.js'
//elementPlus样式导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//自动导入components组件
import autoRegisterComponents from './utils/autoRegisterComponents'

// import './samples/node-api'
const app = createApp({ render: () => h(App) })
app.use(Router)
app.use(autoRegisterComponents)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.mount('#app').$nextTick(() => {
	postMessage({ payload: 'removeLoading' }, '*')
})
