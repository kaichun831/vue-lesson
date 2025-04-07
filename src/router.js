//管理路由 npm install vue-router
import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './screens/MainScreen.vue'
import About from './screens/About.vue'
import NotFound from './screens/NotFoundScreen.vue'
import Backend from './screens/Backend.vue'
import AppConfig from './appConfig.js'
import Production from './screens/Production.vue'
import Father from './screens/Father.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => Father,
  },
  {
    path: '/about',
    name: 'About',
    component: () => About,
  },
  {
    path: '/backend',
    name: 'Backend',
    component: () => Backend,

    beforeEnter: (to, from, next) => {
      // console.log(`beforeEnter ${JSON.stringify(to)}`)
      // console.log(`beforeEnter ${JSON.stringify(from)}`)
      if (AppConfig.getInstance().isLogin()) {
        next()
      } else {
        console.log('没有登录')
        alert('尚未登入，请先登入')
        next('/error')
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => NotFound,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//每個頁面都會監聽
router.beforeEach((to, from, next) => {
  next()
  // console.log(`to ${to.path}`)
  // if ((to.path === '/backend' || to.path === '/withdraw') && AppConfig.getInstance().isLogin()) {
  //   next()
  // } else {
  //   alert('您尚未登入,接下來為您跳轉至登入頁')
  //   next('/Login')
  // }
})

export default router
