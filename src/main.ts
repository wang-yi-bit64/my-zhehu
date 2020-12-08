/*
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-08 14:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\main.ts
 */

import { createApp } from "vue";
import router  from '@/routes'
import Store from '@/store'
import App from "./App.vue";

const app = createApp(App)
app.use(router);
app.use(Store);
app.mount("#app");
