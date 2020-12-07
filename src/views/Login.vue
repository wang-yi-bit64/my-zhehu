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
    const emaidVal = ref("123");
    const emailRules: RulesProps = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "请输入正确电子邮箱格式" },
    ];
    const passwordVal = ref("");
    const passwordRules: RulesProps = [{ type: "required", message: "密码不能为空" }];

    const onFormSubmit = (result: boolean) => {
      console.log("result", result);
      if (result) {
        store.commit("login");
        router.push("/");
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
