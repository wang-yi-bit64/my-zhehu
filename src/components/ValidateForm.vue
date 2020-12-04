
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ValidateForm",
  emits: ['form-submit'],
  setup () {
    const submitForm = () => {
      console.log('submitForm');
    }
    return {
      submitForm
    };
  }
});
</script>
