
<template>
  <div class="validate-from">
    <div class="mb-3">
      <ValidateInput :rules="emailRules" />
    </div>
    <form>
      <div class="mb-3">
        <label
          for="exampleInputEmail1"
          class="form-label"
        >邮箱地址</label>
        <input
          type="email"
          class="form-control"
          v-model="emailRef.val"
          id="exampleInputEmail1"
          @blur="valiadteEmail"
        >
        <div
          class="form-text"
          v-if="emailRef.error"
        >
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label
          for="exampleInputPassword1"
          class="form-label"
        >密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        >
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import ValidateInput, { RulesProps } from './ValidateInput.vue'
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default defineComponent({
  name: "ValidateForm",
  components: {
    ValidateInput
  },
  setup () {
    const emailRules:RulesProps = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确电子邮箱格式' }
    ]

    const emailRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    const valiadteEmail = () => {
      console.log(emailRef.val)
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '邮箱不能为空'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱格式不正确'
      }
    };

    return {
      valiadteEmail,
      emailRef,
      emailRules
    };
  }
});
</script>
