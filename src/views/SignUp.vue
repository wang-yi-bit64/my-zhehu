<!--
 * @Author: your name
 * @Date: 2020-12-15 17:11:42
 * @LastEditTime: 2020-12-17 11:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\Register.vue
-->
<template>
  <div class="rigister-page">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb">
        <validate-input :rules="nameRules" v-model="formData.nickName" placeholder="请输入昵称" />
      </div>
      <div class="mb">
        <validate-input v-model="formData.email" :rules="emailRules" placeholder="请输入邮箱" />
      </div>
      <div class="mb">
        <validate-input :rules="passwordRules" v-model="formData.password" placeholder="请输入密码" type="password" />
      </div>
      <div class="mb">
        <validate-input
          :rules="passwordReRule"
          type="password"
          v-model="formData.repeatPassword"
          placeholder="密码需保持一致"
        />
      </div>

      <template #submit>
        <button type="button" class="btn btn-primary">注册</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput, { RulesProps } from "@/components/ValidateInput.vue";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { CreateUser } from "@/api/user.ts";
import createMessage from "@/components/createMessage";
export default defineComponent({
  name: "SignUp",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup(props, context) {
    const router = useRouter();
    const nameRules: RulesProps = [
      {
        type: "required",
        message: "昵称不能为空",
      },
    ];
    const formData = reactive({
      email: "",
      nickName: "",
      password: "",
      repeatPassword: "",
    });
    const emailRules: RulesProps = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "请输入正确电子邮箱格式" },
    ];
    const passwordRules: RulesProps = [{ type: "required", message: "密码不能为空" }];

    const passwordReRule: RulesProps = [
      { type: "required", message: "密码不能为空" },
      {
        type: "custom",
        validator: () => formData.password === formData.repeatPassword,
        message: "密码不一致",
      },
    ];
    const onFormSubmit = (result: boolean) => {
      console.log(formData);
      if (result) {
        const _data = {
          email: formData.email,
          nickName: formData.nickName,
          password: formData.password,
        };
        CreateUser({ ..._data }).then((res: any) => {
          console.log(res);
          const { msg } = res;
          createMessage(msg, "success");
          router.push("/");
        });
      }
    };

    return {
      formData,
      nameRules,
      emailRules,
      passwordRules,
      passwordReRule,
      onFormSubmit,
    };
  },
});
</script>
<style></style>
