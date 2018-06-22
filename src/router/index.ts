import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import DashBoard from '@/pages/DashBoard.vue'

import Page404 from '@/pages/404.vue'
import Page403 from '@/pages/403.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: Home,
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: DashBoard,
          meta: { title: '系统首页', permission: true }
        }
      ]
    },

    {
      path: '/404',
      component: Page404
    },
    {
      path: '/403',
      component: Page403
    },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username')
  if (!role && to.path !== '/login') {
    next()
  } else if (to.meta.permission) {
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router
