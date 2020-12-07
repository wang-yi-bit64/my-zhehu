<!--
 * @Author: your name
 * @Date: 2020-12-07 10:51:24
 * @LastEditTime: 2020-12-07 13:41:58
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";

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
  },
  setup() {
    return {
      list: testData,
    };
  },
});
</script>
