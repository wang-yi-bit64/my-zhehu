<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post.columnId" class="card mb-3 shadow0sm">
      <div class="card-body">
        <h4>
          <router-link to="/">{{ post.title }}</router-link>
        </h4>
        <div class="row my-3 aligin-items-center">
          <div class="col-4">
            <img class="rounded-lg w-100" :src="post.image" :alt="post.title" />
          </div>
          <p :class="{ 'col-8': post.image }" class="text-muted"></p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostProps } from "@/mock/testData";
export default defineComponent({
  name: "",
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>,
    },
  },
  setup(props) {
    return {
      posts: props.list,
    };
  },
});
</script>
