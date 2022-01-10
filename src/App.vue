<template>
  <div id="app">
    <Head />
    <router-view />
    <Foot v-show="$route.path == '/home' || $route.path == '/search'" />
  </div>
</template>

<script>
import Head from "components/Header";
import Foot from "components/Footer";
export default {
  name: "App",
  components: {
    Head,
    Foot,
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("ahome/baseCategoryList");
  },
};
</script>

<style>
#app {
}
</style>
