<!--
 * @Author: your name
 * @Date: 2020-12-07 11:47:54
 * @LastEditTime: 2020-12-07 11:52:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\ColumnDetail.vue
-->
<template>
  <div>
    <p>这是一个columndetail</p>
    <pre>{{ route }}</pre>
  </div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ColumnDetail",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>
<style></style>
