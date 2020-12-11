<!--
 * @Author: your name
 * @Date: 2020-12-10 17:26:16
 * @LastEditTime: 2020-12-11 11:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\Loader.vue
-->
<template>
  <teleport to="#back">
    <div
      class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
      :style="{ background: background || '' }"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{{ text || "loading" }}</span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
export default defineComponent({
  name: "Loader",
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
    background: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup() {
    const node = document.createElement("div");
    node.id = "back";
    document.body.appendChild(node);
    onUnmounted(() => {
      document.body.removeChild(node);
    });
  },
});
</script>
<style>
.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading-content {
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
