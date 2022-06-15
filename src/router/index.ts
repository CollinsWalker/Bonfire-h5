import { createRouter, createWebHistory } from '@ionic/vue-router'
import Parse from '../utils/parse'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const currentUser = Parse.User.current()
  // window.scrollTo(0, 0)
  if (to.meta.requireAuth && !currentUser) {
    // 判断登录权限
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
