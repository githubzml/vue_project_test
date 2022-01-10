<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />

    <Rank />
    <Like />
    <!-- <Floor v-for="floor in floorsList" :key="floor.id" :list="floor" /> -->

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
export default {
  name: "Home",
  data() {
    floorsList: [];
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
    // this.$store.dispatch('receiveFloors')
  },
  computed: {
    ...mapState({
      // floorsList: (state) => state.home.floors,
    }),
  },
};
</script>

<style>
</style>