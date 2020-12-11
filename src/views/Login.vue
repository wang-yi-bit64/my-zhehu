<!--
 * @Author: your name
 * @Date: 2020-12-07 10:51:16
 * @LastEditTime: 2020-12-11 17:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\Login.vue
-->
<template>
  <div class="login-page">
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <ValidateInput :rules="emailRules" v-model="emaidVal" placeholder="请输入邮箱" type="text" />
      </div>
      <div class="mb-3">
        <ValidateInput :rules="passwordRules" v-model="passwordVal" placeholder="请输入密码" type="password" />
      </div>
    </ValidateForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store";
import { useRouter } from "vue-router";

import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput, { RulesProps } from "@/components/ValidateInput.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const router = useRouter();
    const emaidVal = ref("111@test.com");
    const emailRules: RulesProps = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "请输入正确电子邮箱格式" },
    ];
    const passwordVal = ref("111111");
    const passwordRules: RulesProps = [{ type: "required", message: "密码不能为空" }];

    const onFormSubmit = (result: boolean) => {
      console.log("result", result);
      if (result) {
        const payload = {
          email: emaidVal.value,
          password: passwordVal.value,
        };
        store.dispatch("loginAndFetch", payload).then(() => {
          console.log(router);
          router.push("/");
        });
        // store.commit("login");
      }
    };
    return {
      emaidVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit,
    };
  },
});
</script>
