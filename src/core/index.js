import antd from "ant-design-vue";
import component from "@/components"; // 注册全局组件模块

import { setupActionDirective } from "@/directives/action"; // 引入指令模块
import { setupRouter } from "@/router"; // 引入路由模块
import { setupStore } from "@/store"; // 引入pina模块
import { setupException } from "./exception"; // 引入异常处理模块
import "./permission"; // 引入权限模块
import "ant-design-vue/dist/reset.css";
import "@/styles/index.less";

export const useCore = (app) => {
  app.use(antd);
  app.use(component);
  setupException(app);
  setupStore(app);
  setupRouter(app);
  setupActionDirective(app);
};
