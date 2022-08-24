import { createApp, h } from "vue";
import App from "./App.vue";
import Router from "./router/index.js";
// import './samples/node-api'

const app = createApp({
  render: () => h(App)
});
import * as ElIcons from "@element-plus/icons-vue";

// 全局注册图标
for (const iconName in ElIcons) {
  if (Reflect.has(ElIcons, iconName)) {
    const item = ElIcons[iconName];
    app.component(iconName, item);
  }
}
// 全局注册路由
app.use(Router);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
