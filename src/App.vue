
<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser" />
    <column-list
      v-if="0"
      :list="list"
    />
    <ValidateForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import ValidateForm from "./components/ValidateForm.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    decription: "这是test1的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg"
  },
  {
    id: 2,
    title: "test2的专栏",
    decription: "这是test2的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg"
  },
  {
    id: 3,
    title: "test3的专栏",
    decription: "这是test3的专栏",
    avatar:
      "http://n.sinaimg.cn/photo/crawl/300/w550h550/20200921/282e-izmihnt8087611.jpg"
  },
  {
    id: 4,
    title: "test1的专栏",
    decription: "这是test1的专栏"
  }
];

const currentUser: UserProps = {
  isLogin: true,
  name: "张三"
};

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
    ValidateForm
  },
  setup () {
    return {
      list: testData,
      currentUser
    };
  }
});
</script>
