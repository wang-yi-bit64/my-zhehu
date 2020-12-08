<!--
 * @Author: your name
 * @Date: 2020-12-07 11:47:54
 * @LastEditTime: 2020-12-08 13:55:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\ColumnDetail.vue
-->
<template>
  <div class="column-detil-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" v-if="column.avatar" :alt="column.title" class="rounded-circle w-100" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <PostList :list="list" />
  </div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "ColumnDetail",
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const currentId = +route.params.id;
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.getters.getCurrentColumn(currentId));
    const testPosts = computed(() => store.getters.getCurrentPostc(currentId));
    return {
      column: testData,
      list: testPosts,
    };
  },
});
</script>
