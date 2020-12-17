<!--
 * @Author: your name
 * @Date: 2020-12-04 11:21:04
 * @LastEditTime: 2020-12-16 10:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\ValidateInput.vue
-->
<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag !== 'textarea'"
      class="form-control"
      v-bind="$attrs"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validInput"
    />
    <textarea
      v-else
      class="form-control"
      v-bind="$attrs"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validInput"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, computed } from "vue";
import { emitter } from "./ValidateForm.vue";

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface RuleProp {
  type: "required" | "email" | "custom";
  message: string;
  validator?: () => boolean;
}
export type TagType = "input" | "textarea";

export type RulesProps = RuleProp[];

export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RulesProps>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: "input",
    },
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || "",
        set: (val) => context.emit("update", val),
      }),
      error: false,
      message: "",
    });
    const validInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            case "custom":
              passed = rule.validator ? rule.validator() : true;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };
    onMounted(() => {
      emitter.emit("form-item-created", validInput);
    });
    return {
      inputRef,
      validInput,
    };
  },
});
</script>
