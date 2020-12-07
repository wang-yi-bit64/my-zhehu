<template>
  <div class="container">
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
