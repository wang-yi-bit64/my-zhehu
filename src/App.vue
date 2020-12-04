<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-04 16:36:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\App.vue
-->
<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser" />
    <column-list v-if="0" :list="list" />
    <ValidateForm>
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
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import ValidateForm from "./components/ValidateForm.vue";
import ValidateInput, { RulesProps } from "./components/ValidateInput.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    decription: "这是test1的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 2,
    title: "test2的专栏",
    decription: "这是test2的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 3,
    title: "test3的专栏",
    decription: "这是test3的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 4,
    title: "test1的专栏",
    decription: "这是test1的专栏",
  },
];

const currentUser: UserProps = {
  isLogin: true,
  name: "张三",
};

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const emaidVal = ref("123");

    const emailRules: RulesProps = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "请输入正确电子邮箱格式" },
    ];

    const passwordVal = ref("12313");
    const passwordRules: RulesProps = [
      { type: "required", message: "密码不能为空" },
    ];
    return {
      list: testData,
      currentUser,
      emaidVal,
      emailRules,
      passwordVal,
      passwordRules,
    };
  },
});
</script>
