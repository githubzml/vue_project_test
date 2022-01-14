<template>
  <div>
    <input type="text" @focus="nn" @blur="bb" v-model="kk" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      kk: 0,
    };
  },
  methods: {
    nn() {
      // 如果是数字类型 转化为字符串
      if (typeof this.kk == "number") {
        this.kk = this.kk.toString();
      }
      // ES6 includes 判断是否含有千分符
      if (this.kk.includes(",")) {
        this.kk = this.kk.split(",").join("");
      }
      // ES6 includes 判断是否含有
      if (this.kk.includes(".00")) {
        this.kk = this.kk.split(".00")[0];
      }
    },
    bb() {
      //转化为数字类型 保留两位有效数字
      this.kk = Number(this.kk).toFixed(2);
      this.kk = this.kk.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style>
</style>