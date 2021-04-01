<template>
  <div class="errPage-container">
    <button class="pan-back-btn" @click="back">
      返回
    </button>
    <v-row class="unauthorized-content">
      <v-col :cols="6" class="unauthorized-desc">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/">回首页</router-link>
          </li>
        </ul>
      </v-col>
      <v-col :cols="6" class="gif">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import errGif from "../../assets/401_images/401.gif";

export default {
  name: "Page401",
  data() {
    return {
      errGif: errGif + "?" + Number(new Date())
    };
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: "/" });
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage-container {
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: white;

  .unauthorized-desc {
    padding: 16%;
  }

  .gif {
    margin: 0 auto;
    display: block;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
}
</style>
