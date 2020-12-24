<!--
 * @Author: your name
 * @Date: 2020-12-07 10:51:24
 * @LastEditTime: 2020-12-23 17:36:58
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
            <router-link to="/createpost" class="btn btn-primary">开始写文章</router-link>
          </p>
        </div>
      </div>
    </section>
    <Uploader action="/upload" @file-uploaded="onFIleUploaded" :before-upload="beforeUpload">
      <template #uploaded="dataProps">
        <pre>{{ dataProps.uploadData.data }}</pre>
      </template>
    </Uploader>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list" />
    <button v-if="list && list.length" class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25">
      加载更多
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps, ResponstType, ImageProps } from "@/store";
import ColumnList from "@/components/ColumnList.vue";
import Uploader from "@/components/Uploader.vue";
import createMessage from "@/components/createMessage";
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Uploader,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.getters.columns);

    const beforeUpload = (file: File) => {
      console.log("before-upload", file);

      // const isJPG = file.type === "image/jpeg";
      // if (!isJPG) {
      //   createMessage("请上传 jpg格式的图片", "error");
      //   return isJPG;
      // }
      return true;
    };

    const onFIleUploaded = (rawData: ResponstType<ImageProps>) => {
      console.log("onFIleUploaded", rawData);

      createMessage(`上传图片ID ${rawData.data._id}`, "success");
    };
    onMounted(() => {
      store.dispatch("fetchColumns", { pageSize: 3 });
    });
    return {
      list,
      beforeUpload,
      onFIleUploaded,
    };
  },
});
</script>
