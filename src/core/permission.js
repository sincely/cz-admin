import { useProgress } from '@/hooks'
import router from '@/router'
import { whiteList } from '@/router/config'
import { useAppStore, useUserStore } from '@/store'

const progress = useProgress()

router.beforeEach((to, from, next) => {
  const { meta } = to
  const { title } = meta
  const appStore = useAppStore()
  const userStore = useUserStore()
  // 是否登录
  const isLogin = userStore.isLogin
  // 初始化是否完成
  const complete = appStore.complete
  // 开始进度条
  progress.start()

  // 设置标题
  document.title = title ? `${title} - ${import.meta.env.VITE_TITLE}` : import.meta.env.VITE_TITLE

  if (whiteList.includes(to.name)) {
    // 在白名单
    next()
  } else {
    // 判断当前登录状态
    if (isLogin) {
      // 判断是否初始化完成
      if (complete) {
        // 初始化完成
        next()
      } else {
        // 初始化未加载完成
        appStore.init().then(() => {
          next({ ...to, replace: true })
        })
      }
    } else {
      // 未登录
      next({
        name: 'login',
        replace: true,
        query: { redirect: encodeURIComponent(location.href) }
      })
    }
  }
})

router.afterEach(() => {
  progress.done()
})
