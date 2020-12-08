<template>
  <div>
    <Animation></Animation>
    <Rank></Rank>
  </div>
</template>

<script>
import Animation from "./Animation";
import Rank from "./Rank"

export default {
  name: "Home",
  //这里是局部注册
  components: {
    Animation,
    Rank
  },

  methods: {},

  computed: {},
};
</script>

<style lang="less" scoped></style>
