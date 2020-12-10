<!--
 * @Author: your name
 * @Date: 2020-12-07 11:47:54
 * @LastEditTime: 2020-12-10 18:11:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\ColumnDetail.vue
-->
<template>
  <div class="column-detil-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
      <div class="col-3 text-enter" v-if="column">
        <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle w-100" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list" />
  </div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { defineComponent, computed, onMounted } from "vue";

import { GlobalDataProps } from "@/store";
import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "ColumnDetail",
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const currentId = route.params.id;
    const store = useStore<GlobalDataProps>();

    onMounted(() => {
      store.dispatch("fetchColumn", currentId);
      store.dispatch("fetchPostc", currentId);
    });
    const currentColumn = computed(() => store.getters.currentColumn);
    const currentPostc = computed(() => store.getters.posts);
    console.log("currentColumn", currentColumn);
    console.log("currentPostc", currentPostc);
    return {
      column: currentColumn,
      list: currentPostc,
    };
  },
});
</script>
