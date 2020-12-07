<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-07 11:06:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\App.vue
-->
<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser" />
    <router-view></router-view>
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

const currentUser: UserProps = {
  isLogin: true,
  name: "张三",
};

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  setup() {
    return {
      currentUser,
    };
  },
});
</script>
