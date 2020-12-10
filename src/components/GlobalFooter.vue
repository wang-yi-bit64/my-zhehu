<!--
 * @Author: your name
 * @Date: 2020-12-07 10:52:19
 * @LastEditTime: 2020-12-10 16:32:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\GlobalFooter.vue
-->
<template>
  <footer class="text-center py-4 text-secondary bg-light mt-6">
    <small>
      <ul class="list-line mb-0">
        <li class="list-inline-item">c 2020 者也专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>
