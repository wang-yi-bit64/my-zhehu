<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-23 17:52:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\App.vue
-->
<template>
  <div class="container">
    <global-header :user="currentUser" />
    <Loader v-if="isLoading" text="加载中"></Loader>
    <router-view></router-view>
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import http from "@/utils/request";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/GlobalFooter.vue";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
    Loader,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentUser = computed(() => store.getters.user);
    const isLoading = computed(() => store.state.loading);
    // const token = computed(() => store.state.token);

    // onMounted(() => {
    //   if (!currentUser.value.isLogin && token.value) {
    //     http.defaults.headers.common.Authorization = `Bearer ${token.value}`;
    //     store.dispatch("fetchCurrentUser");
    //   }
    // });
    return {
      currentUser,
      isLoading,
    };
  },
});
</script>
