<!--
 * @Author: your name
 * @Date: 2020-12-14 10:36:20
 * @LastEditTime: 2020-12-15 15:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\Message.vue
-->
<template>
  <teleport to="#message">
    <div class="alert message-info" :class="classObject" v-if="isVisible">
      <button type="button" class="close" @click.prevent="hide">
        <span>{{ message }}</span>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import useDOMCreate from "@/hooks/useDOMCreate";
export type MessageType = "success" | "error" | "default";
export default defineComponent({
  name: "Message",
  props: {
    message: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String as PropType<MessageType>,
      required: false,
      default: "default",
    },
  },
  emits: ["close-message"],
  setup(props, context) {
    useDOMCreate("message");
    const isVisible = ref(true);
    const classObject = {
      "alert-success": props.type === "success",
      "alert-error": props.type === "error",
      "alert-primary": props.type === "default",
    };
    const hide = () => {
      isVisible.value = false;
      context.emit("close-message", true);
    };
    return {
      classObject,
      hide,
      isVisible,
    };
  },
});
</script>
<style></style>
