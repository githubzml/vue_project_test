<template>
  <div id="app">
    <Head />
    <div>新的项目</div>
    <Foot />
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
};
</script>

<style>
#app {
}
</style>
