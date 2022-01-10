<template>
  <div>
    <p>防抖测试</p>
    <input type="text" @input="handler($event)" />

    <ul @click="wp($event)">
      <li v-for="(item, index) in foods" :key="index">
        <span :data-name="item.name" :data-p1="`${item.name}-${index}`">{{
          item.name
        }}</span>
        |
        <p v-for="(item2, index2) in item.children" :key="index2">
          <span :data-name="item2.name" :data-p2="`${item2.name}-${index2}`">{{
            item2.name
          }}</span>

          <b
            v-for="(item3, index3) in item2.children"
            :key="index3"
            :data-name="item3.name"
            :data-p3="`${item3.name}-${index3}`"
          >
            {{ item3.name }}
          </b>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      foods: [
        {
          name: "水果",
          children: [
            {
              name: "苹果",
              children: [
                {
                  name: "vz",
                },
                {
                  name: "vy",
                },
              ],
            },
            {
              name: "香蕉",
              children: [
                {
                  name: "vn",
                },
                {
                  name: "vl",
                },
              ],
            },
          ],
        },
        {
          name: "蔬菜",
          children: [
            {
              name: "白菜",
              children: [
                {
                  name: "vc",
                },
                {
                  name: "vb",
                },
              ],
            },
            {
              name: "萝卜",
              children: [
                {
                  name: "vb",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    //只执行最后一次
    handler: _.debounce(function (e) {
      var val = e.target.value;
      console.log(val, this);
    }, 500),
    // 事件委派
    wp(e) {
      let ele = e.target;
      //获取自定义属性
      let { name, p1, p2, p3 } = ele.dataset;
      //如果点击选中的是当前元素
      if (name) {
        let location = { name: "search" };
        let query = { name };
        if (p1) {
          query.p1 = p1;
        } else if (p2) {
          query.p2 = p2;
        } else if (p3) {
          query.p3 = p3;
        }
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
ul {
  li {
    display: flex;
    > span {
      margin: 0 5px;
    }
    > p {
    }
  }
}
</style>