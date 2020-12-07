<template>
  <div class="column-detil-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle" />
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
import { defineComponent } from "vue";
import { testPosts, testData } from "@/mock/testData";

import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "ColumnDetail",
  components: {
    PostList,
  },
  setup() {
    const route = useRoute();
    const currentId = +route.params.id;
    const column = testData.find((c) => c.id === currentId);
    const list = testPosts.filter((post) => post.columnId === currentId);
    return {
      route,
      column,
      list,
    };
  },
});
</script>
<style>
.column-info img {
  width: 120px;
  heig: 120px;
}
</style>
