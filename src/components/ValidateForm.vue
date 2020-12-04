<!--
 * @Author: your name
 * @Date: 2020-12-04 11:26:29
 * @LastEditTime: 2020-12-04 16:19:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\ValidateForm.vue
-->
<template>
  <div class="validate-from">
    <form>
      <slot name="default" />
      <div class="submit-area" @click.prevent="submitForm">
        <slot name="submit">
          <button type="button" class="btn btn-primary">提交</button>
        </slot>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";

export const emitter = mitt();

type ValidateFunc = () => boolean;

export default defineComponent({
  name: "ValidateForm",
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];

    const submitForm = () => {
      console.log("submitForm");
      const result = funcArr.map((func) => func());
      context.emit("form-submit", result);
    };
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funcArr.push(func);
      }
    };
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>
