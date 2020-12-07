<!--
 * @Author: your name
 * @Date: 2020-12-07 10:51:24
 * @LastEditTime: 2020-12-07 11:42:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\Home.vue
-->
<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作,自由表达</h2>
          <p>
            <router-link to="/" class="btn btn-primary">开始写文章</router-link>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list" />
    <button class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25">加载更多</button>
    <ValidateForm @form-submit="onFormSubmit" v-if="0">
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
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput, { RulesProps } from "@/components/ValidateInput.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    decription: "这是test1的专栏",
    avatar: "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 2,
    title: "test2的专栏",
    decription: "这是test2的专栏",
    avatar: "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 3,
    title: "test3的专栏",
    decription: "这是test3的专栏",
    avatar: "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg",
  },
  {
    id: 4,
    title: "test1的专栏",
    decription: "这是test1的专栏",
  },
];

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const emaidVal = ref("123");
    const emailRules: RulesProps = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "请输入正确电子邮箱格式" },
    ];
    const passwordVal = ref("");
    const passwordRules: RulesProps = [{ type: "required", message: "密码不能为空" }];

    const onFormSubmit = (result: boolean) => {
      console.log("result", result);
    };

    return {
      list: testData,
      emaidVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit,
    };
  },
});
</script>
