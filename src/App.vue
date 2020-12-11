<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-11 11:21:25
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
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
    const currentUser = computed(() => store.getters.user);
    const isLoading = computed(() => store.state.loading);
    return {
      currentUser,
      isLoading,
    };
  },
});
</script>
