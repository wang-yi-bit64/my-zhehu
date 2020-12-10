<!--
 * @Author: your name
 * @Date: 2020-12-07 10:51:24
 * @LastEditTime: 2020-12-10 16:45:43
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
import { GlobalDataProps } from "@/store";
import ColumnList from "@/components/ColumnList.vue";
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.getters.columns);
    console.log("computed list", list.value);
    onMounted(() => {
      store.dispatch("fetchColumns", { pageSize: 3 });
    });
    return {
      list,
    };
  },
});
</script>
