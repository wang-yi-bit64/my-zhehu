<template>
  <div class="validate-from">
    <form>
      <slot name="default" />
      <div
        class="submit-area"
        @click.prevent="submitForm"
      >
        <slot name="submit">
          <button
            type="button"
            class="btn btn-primary"
          >
            提交
          </button>
        </slot>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from 'mitt'

export const emitter = mitt()

export default defineComponent({
  name: "ValidateForm",
  emits: ['form-submit'],
  setup () {
    const submitForm = () => {
      console.log('submitForm');
    }
    const callback = (test: string | undefined) => {
      console.log('test', test);
    }
    emitter.on("form-item-created", callback)
    onUnmounted(() => {
      emitter.off(
        'form-item-created',
        callback
      )
    })
    return {
      submitForm
    };
  }
});
</script>
