<template>
  <div>
    <!-- <p>123</p>
    <p>{{ num }}</p> -->
    <TypeNav />
    <ListContainer />
    <Recommend />

    <Rank />
    <Like />
    <Floor v-for="floor in floors" :key="floor.id" :list="floor" />

    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

import { aa } from "../../api/index";

export default {
  name: "Home",
  data() {
    return {
      floorsList: [],
    };
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },

  mounted() {
    this.$store.dispatch("ahome/receiveFloors");
    // 本地node测试
    // aa().then((res) => {
    //   // console.log("res", res);
    // });
    console.log("this", this.$store.state);
  },
  computed: {
    ...mapState("ahome", ["num"]),

    ...mapState("ahome", ["floors"]),
  },
};
</script>

<style>
</style>