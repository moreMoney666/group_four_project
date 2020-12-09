<template>
  <div>
    <!-- 菜单栏 -->
      <Menu/>
      <!-- 轮播图 -->
      <Carousel/>
  </div>
</template>

<script>
import Menu from './Menu'
import Carousel from './Carousel'
import {reqBanners} from '@/api'
export default {
  name: 'Home',
  components:{
      Menu,
      Carousel
  },
  mounted(){},
  methods:{}

}
</script>

<style lang="less" scoped>

</style>
