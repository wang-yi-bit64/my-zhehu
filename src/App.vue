<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-08 10:48:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\App.vue
-->
<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view></router-view>
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  setup() {
    const store = useStore();
    const currentUser = computed(() => store.getters.user);
    return {
      currentUser,
    };
  },
});
</script>
