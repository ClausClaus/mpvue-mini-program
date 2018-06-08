<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <ul v-for="(item,index) in list" :key="index">
      <li>{{index}}{{item.a}}</li>
    </ul>
    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ a: "12" }, { a: "12" }, { a: "12" }, { a: "12" }, { a: "12" }]
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("INCREMENT");
    },
    decrement() {
      this.$store.commit("DECREMENT");
    }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
