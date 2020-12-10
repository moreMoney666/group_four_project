<template>
  <div>
    <h1>资金不足---正在开发中</h1>
    <button @click="toHome">点击回到主页</button>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    toHome() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style lang="less" scoped>
</style>
