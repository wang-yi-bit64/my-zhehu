<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang='ts'>
import useClickOutside from '../hooks/useClickOutside'
// import { defineComponent, ref, ,onMounted, onUnmounted } from 'vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      isrequired: true
    }
  },
  setup () {
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    // const handler = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     console.log(dropdownRef.value)
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>
<style></style>
