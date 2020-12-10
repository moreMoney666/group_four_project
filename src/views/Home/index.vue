<template>
  <div>
    <Menu></Menu>
    <Carousel></Carousel>
    <Animation></Animation>
    <Bangumi></Bangumi>
  </div>
</template>

<script>
import Bangumi from "./Bangumi";
import Animation from "./Animation";
import Carousel from "./Carousel";
import Menu from "./Menu";
import Rank from "./Rank";

export default {
  name: "",
  components: {
    Bangumi,
    Animation,
    Carousel,
    Menu,
    Rank,
  },
};
</script>
<style lang="less" scoped>
</style>
