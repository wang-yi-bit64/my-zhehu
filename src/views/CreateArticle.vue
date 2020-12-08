<!--
 * @Author: your name
 * @Date: 2020-12-08 11:03:31
 * @LastEditTime: 2020-12-08 13:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\views\CreateArticle.vue
-->
<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <!-- <h3>上传头像</h3> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题:</label>
        <validate-input type="text" v-model="titleVal" :rules="titleRules" placeholder="请输入文章标题" />
      </div>
      <div class="mb-3">
        <label class="form-label">文章内容:</label>
        <validate-input
          tag="textarea"
          row="10"
          v-model="contentVal"
          :rules="contentRules"
          placeholder="请输入文章标题"
        />
      </div>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput, { RulesProps } from "@/components/ValidateInput.vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps, PostProps } from "@/store";
export default defineComponent({
  name: "Createarticle",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup(props, context) {
    const Store = useStore<GlobalDataProps>();
    const router = useRouter();
    const titleVal = ref("");
    const titleRules: RulesProps = [{ type: "required", message: "文章标题不能为空" }];
    const contentVal = ref("");
    const contentRules: RulesProps = [{ type: "required", message: "文章内容不能为空" }];
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = Store.state.user;
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString(),
          };
          Store.commit("createPost", newPost);
          router.push(`/column/${columnId}`);
        }
      }
    };
    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      onFormSubmit,
    };
  },
});
</script>
<style></style>
