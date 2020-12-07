/*
 * @Author: your name
 * @Date: 2020-12-07 11:09:03
 * @LastEditTime: 2020-12-07 13:39:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\routes\index.ts
 */
import {createRouter ,createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'

const routerHistory = createWebHistory()

export const Router = createRouter({
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
    }
  ]
})
