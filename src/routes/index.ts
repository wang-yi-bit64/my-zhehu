/*
 * @Author: your name
 * @Date: 2020-12-07 11:09:03
 * @LastEditTime: 2020-12-08 17:09:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\routes\index.ts
 */
import {createRouter ,createWebHistory} from 'vue-router'
import Store from '@/store'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import CreatePost from '@/views/CreateArticle.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  history:routerHistory,
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/column/:id',
      name:'column',
      component:ColumnDetail
    },
    {
      path:'/createpost',
      name:'createpost',
      component:CreatePost,
      meta: {
        requiredLogin:true
      }
    }
  ]
})

router.beforeEach((to, from , next) => {
  if(to.meta.requiredLogin && !Store.state.user.isLogin) {
    next({name:'login'})
  } else if (to.meta.requiredLogin && Store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
