<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import useClickOutside from "../hooks/useClickOutside";
import mitt from "mitt";
import { defineComponent, ref, watch, onUnmounted } from "vue";
export const emitter = mitt();
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      isrequired: true,
    },
  },
  emits: ["item-clicked"],
  setup(props, context) {
    const dropdownRef = ref<null | HTMLElement>(null);
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const dropDownItemClicked = (e: any) => {
      if (e.props.closeAfterClick) {
        isOpen.value = false;
      }
      context.emit("item-clicked", e);
    };
    emitter.on("dropdown-item-clicked", dropDownItemClicked);
    onUnmounted(() => {
      emitter.off("dropdown-item-clicked", dropDownItemClicked);
    });

    const isClickOutside = useClickOutside(dropdownRef);
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    };
  },
});
</script>
<style></style>
