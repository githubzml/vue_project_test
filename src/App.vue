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
};
</script>

<style>
#app {
}
</style>
