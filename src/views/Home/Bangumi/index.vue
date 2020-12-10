<template>
  <!-- 番剧 -->
  <div class="Bangumi">
    <div class="between-space">
      <BangumiLeft></BangumiLeft>
      <Rank></Rank>
    </div>
  </div>
</template>

<script>
import ajax from "@/ajax/ajax";
import BangumiLeft from "./BangumiLeft";
import Rank from "@/views/Home/Rank";
export default {
  name: "",
  components: {
    BangumiLeft,
    Rank,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.Bangumi {
  width: 1200px;
  height: 450px;
  margin: 0 auto;
  // background: skyblue;
  .between-space {
    width: 100%;
    height: 428px;
    // background: pink;
    display: flex;
    margin-top: 20px;
  }
  .Bangumi .space-between .right-list {
    width: 320px;
    height: 428px;
  }
  .Bangumi .space-between .right-list .header-list {
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 20px;
  }
  .Bangumi .space-between .right-list .header-list .name {
    font-size: 20px;
    color: #505050;
  }
  .Bangumi .space-between .right-list .header-list .more {
    font-size: 12px;
    align-items: center;
    width: 58px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    border: 1px solid silver;
    border-radius: 2px;
    color: #505050;
  }
  .Bangumi .space-between .right-list .header-list .more:hover {
    background: lightgray;
    transition: all 0.2s;
  }
  .Bangumi .space-between .rank-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    width: 320px;
    height: 20px;
    margin-left: 15px;
  }
  .Bangumi .space-between .rank-wrap .number {
    font-size: 14px;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 2px;
    display: inline-block;
    cursor: pointer;
  }
  .Bangumi .space-between .rank-wrap .on {
    color: #fff;
    background: #00a1d6;
  }
  .Bangumi .space-between .rank-wrap .txt {
    width: 290px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .Bangumi .space-between .rank-wrap .txt a {
    display: flex;
    justify-content: space-between;
    width: 290px;
  }
  .Bangumi .space-between .rank-wrap .txt .title {
    font-size: 14px;
  }
  .Bangumi .space-between .rank-wrap .txt .update {
    font-size: 12px;
    color: #00a1d6;
    text-align: right;
    min-width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
