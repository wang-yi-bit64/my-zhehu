
<template>
  <div class="validate-from">
    {{ emaidVal }}
    {{ passwordVal }}
    <form>
      <div class="mb-3">
        <ValidateInput
          :rules="emailRules"
          v-model="emaidVal"
          placeholder="请输入邮箱"
          type="text"
        />
      </div>
      <div class="mb-3">
        <ValidateInput
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
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
    const emaidVal = ref('testking')
    const emailRef = reactive({
      val: "",
      error: false,
      message: ""
    });

    const passwordVal = ref('')
    const passwordRules:RulesProps = [
      { type: 'required', message: '密码不能为空' }
    ]
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
      emailRules,
      emaidVal,
      passwordVal,
      passwordRules
    };
  }
});
</script>
