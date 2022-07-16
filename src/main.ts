import { createApp, Component } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// import './samples/node-api'

const app = createApp(App);
import * as ElIcons from "@element-plus/icons-vue";
import { log } from "console";

// 全局注册图标
for (const iconName in ElIcons) {
  if (Reflect.has(ElIcons, iconName)) {
    const item = ElIcons[iconName];
    app.component(iconName, item);
  }
}
// 注册路由
app.use(router);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
