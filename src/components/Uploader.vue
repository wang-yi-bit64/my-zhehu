<!--
 * @Author: your name
 * @Date: 2020-12-17 13:53:30
 * @LastEditTime: 2020-12-23 16:46:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\Uploader.vue
-->
<template>
  <div class="file-upload">
    <button class="btn btn-primary" @click="griggerUploader">
      <span v-if="fileStatus === 'ready'">点击上传</span>
      <span v-if="fileStatus === 'loading'">正在上传...</span>
      <span v-if="fileStatus === 'success'">上传成功</span>
      <span v-if="fileStatus === 'error'">上传失败</span>
    </button>
    <input type="file" class="file-input d-none" ref="fileInput" @change="handlerFileChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import http from "@/utils/request";
type UploadStatus = "ready" | "loading" | "success" | "error";
type CheckFunction = (file: File) => boolean;
export default defineComponent({
  name: "Uploader",
  props: {
    action: {
      type: String,
      required: true,
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>,
    },
  },
  setup(props, context) {
    const fileInput = ref<null | HTMLInputElement>(null);
    const fileStatus = ref<UploadStatus>("ready");
    const griggerUploader = () => {
      if (fileInput.value) {
        fileInput.value.click();
      }
    };
    const handlerFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement;
      console.log(currentTarget.files);

      if (currentTarget.files) {
        const files = Array.from(currentTarget.files);

        if (props.beforeUpload) {
          const result = props.beforeUpload(files[0]);
          if (!result) {
            return;
          }
        }
        fileStatus.value = "loading";
        const formData = new FormData();
        formData.append("file", files[0]);
        http
          .post(props.action, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((resp) => {
            console.log(resp);
            fileStatus.value = "success";
          })
          .catch((err) => {
            console.log(err);
            fileStatus.value = "error";
          })
          .finally(() => {
            if (fileInput.value) {
              fileInput.value.value = "";
            }
          });
      }
    };
    return {
      fileInput,
      fileStatus,
      griggerUploader,
      handlerFileChange,
    };
  },
});
</script>
<style></style>
