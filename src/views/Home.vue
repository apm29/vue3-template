<template>
  <h1>{{ msg }}</h1>
  {{ $store.state.pageState.loading }}
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="count++">{{ count }}</button>
  <button @click="$store.commit('startLoading')">+</button>
  <button @click="$store.commit('stopLoading')">-</button>
  <div>
    <el-container>
      <el-aside>333</el-aside>
      <el-main
        >123
        <el-button class="container" @click="mockAxios"> 123 </el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import request from "@/utils/remote.js";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  setup(props, context) {
    const state = reactive({ count: 0 });
    const count = ref(1);

    onMounted(() => {
      console.log(666);
    });
    const mockAxios = function () {
      request.post({
        url: "/captcha",
      });
    };

    return {
      state,
      count,
      mockAxios,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
