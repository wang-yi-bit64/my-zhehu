/*
 * @Author: your name
 * @Date: 2020-12-07 11:09:03
 * @LastEditTime: 2020-12-23 18:18:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\routes\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import http from "@/utils/request";
import Store from "@/store";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import ColumnDetail from "@/views/ColumnDetail.vue";
import CreatePost from "@/views/CreateArticle.vue";
import SignUp from "@/views/SignUp.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        redirectAlreadyLogin: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      meta: {
        redirectAlreadyLogin: true,
      },
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail,
    },
    {
      path: "/createpost",
      name: "createpost",
      component: CreatePost,
      meta: {
        requiredLogin: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { user, token } = Store.state;
  const { requiredLogin, redirectAlreadyLogin } = to.meta;
  if (!user.isLogin) {
    if (token) {
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
      Store.dispatch("fetchCurrentUser")
        .then(() => {
          console.log("fetchCurrentUser");
          if (redirectAlreadyLogin) {
            next("/");
          } else {
            next();
          }
        })
        .catch((e) => {
          console.log(e);
          localStorage.removeItem("token");
          next({ name: "login" });
        });
    } else {
      if (requiredLogin) {
        next({ name: "login" });
      } else {
        next();
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next("/");
    } else {
      next();
    }
  }

  // if (to.meta.requiredLogin && !Store.state.user.isLogin) {
  //   next({ name: "login" });
  // } else if (to.meta.requiredLogin && Store.state.user.isLogin) {
  //   next("/");
  // } else {
  //   next();
  // }
});

export default router;
