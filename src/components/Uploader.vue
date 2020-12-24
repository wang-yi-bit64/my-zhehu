<!--
 * @Author: your name
 * @Date: 2020-12-17 13:53:30
 * @LastEditTime: 2020-12-23 17:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\Uploader.vue
-->
<template>
  <div class="file-upload">
    <div class="file-upload-container" @click="griggerUploader">
      <slot name="defalt">
        <button class="btn btn-primary">点击上传</button>
      </slot>
      <slot name="loading" v-if="fileStatus === 'loading'">
        <button class="btn btn-primary">正在上传...</button>
      </slot>
      <slot v-if="fileStatus === 'success'" name="uploaded" :uploadData="uploadData">
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-if="fileStatus === 'error'" name="error">
        <button class="btn btn-primary">上传失败</button>
      </slot>
    </div>
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
  emits: ["file-uploaded", "file-uploaded-error"],
  setup(props, context) {
    const fileInput = ref<null | HTMLInputElement>(null);
    const fileStatus = ref<UploadStatus>("ready");
    const uploadData = ref();
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
            console.log("fileStatus success", resp);
            fileStatus.value = "success";
            uploadData.value = resp;
            context.emit("file-uploaded", resp);
          })
          .catch((err) => {
            console.log(err);
            fileStatus.value = "error";
            context.emit("file-uploaded-error", { err });
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
      uploadData,
    };
  },
});
</script>
<style></style>
