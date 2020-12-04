
<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid':inputRef.error}"
      v-model="inputRef.val"
      @blur="validInput"
    >
    <span
      v-if="inputRef.error"
      class="invalid-feedback"
    >{{ inputRef.message }}</span>
  </div>
</template>
<script lang='ts'>

import { defineComponent, PropType, reactive } from "vue";
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
interface RuleProp {
  type:'required' | 'email';
  message: string;
}

export type RulesProps = RuleProp[]

export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RulesProps>
  },
  setup (props, context) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '');
              break;
            case 'email':
              passed = emailReg.test(inputRef.val);
              break;
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validInput
    };
  }
});
</script>
<style></style>
