<!--
 * @Author: your name
 * @Date: 2020-11-24 15:27:26
 * @LastEditTime: 2020-12-04 13:52:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\DropdownItem.vue
-->
<template>
  <li
    class="dropdown-option"
    @click="handleItemClick"
    :class="{'is-disabled':disabled}"
  >
    <slot />
  </li>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { emitter } from './Dropdown.vue'
export default defineComponent({
  name: '',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    closeAfterClick: {
      type: Boolean,
      defalut: false
    }
  },
  setup (props) {
    const handleItemClick = (e: MouseEvent) => {
      emitter.emit('dropdown-item-clicked', { e, props })
    }
    return {
      handleItemClick
    }
  }
})
</script>
<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color:transparent ;
}
</style>
