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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";

// import { testPosts, testData } from "@/mock/testData";

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
    const testPosts1 = computed(() => {
      const list = store.getters.getCurrentPostc(currentId);
      console.log(list);
      return list;
    });
    console.log("testPosts1", testPosts1);
    const testData = computed(() => store.getters.getCurrentColumn(currentId));
    console.log("testData", testData.value);

    // const column = testData.filter((c) => c.id === currentId);
    // const list = testPosts.filter((post) => post.columnId === currentId);
    return {
      column: [],
      list: [],
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
