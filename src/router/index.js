import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { constantRoutes } from './config' // 静态路由配置

const router = createRouter({
  history:
    'history' === import.meta.env.VITE_ROUTER_HISTORY
      ? createWebHistory(import.meta.env.VITE_ROUTER_BASE)
      : createWebHashHistory(import.meta.env.VITE_ROUTER_BASE),
  routes: [...constantRoutes]
})

export const setupRouter = (app) => {
  app.use(router)
  return app
}

export default router
