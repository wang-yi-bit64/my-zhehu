
<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img class="rounded-circle card_avatar border-light w-23 my-3" :src="column.avatar" :alt="column.title" srcset="">
          <h5 class="card-title">{{column.title}}</h5>
        <p class="card-text text-left">{{column.decription}}</p>
        <a href="#" class="btn btn-outline-primary stretched-link">进入专栏</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  decription: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style lang="css">
  .card_avatar {
    width:100px;
    height:100px;
  }
</style>
