import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: 'explore',
        component: () => import('@/views/explore/Index.vue')
      },
      {
        path: 'notify',
        component: () => import('@/views/notify/Index.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/profile/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/public/Login.vue'),
    name: 'Login',
    meta: {
      title: '登录用户'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/public/Register.vue'),
    name: 'Register',
    meta: {
      title: '注册用户'
    }
  },
  {
    path: '/addGroup',
    component: () => import('@/views/public/AddGroup.vue'),
    name: 'Register',
    meta: {
      title: '添加小组'
    }
  },
  {
    path: '/groupDetail',
    component: () => import('@/views/home/groupDetail.vue'),
    name: 'GroupDetail'
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default routes
