<template>
  <div class="rank">
    <!-- 排行榜标题 -->
    <div class="rank-tit">
      <h3>排行榜</h3>
      <span>更多&nbsp;></span>
    </div>
    <!-- 排行榜内容 -->
    <div class="rank-content">
      <!-- 第一个排行榜项-带图片 -->
     <div class="rank-content-item-first"  v-for="(item) in firstrank" :key="item.tid" >
        <i class="active">1</i>
        <img :src="item.pic">
        <div class="rank-content-item-right">
            <p>{{ item.title }}</p>
            <span>综合得分：{{(item.pts/10000).toFixed(2)+' '+'w'}}</span>
        </div>
      </div> 
      <!-- 排行榜项目 -->
      <ul class="rank-content-item" v-for="(item, index) in normolrank" :key="index">
        <li>
          <i>{{ index + 2 }}</i>
          <p>{{ item.title }}</p>
        </li>
      </ul>

    
    </div>
  </div>
</template>

<script>
export default {
  name: "rank",
  data() {
    return {
      rank: [], // 用来接收请求回来的数据
      firstrank:[], //第一数组数据
      normolrank:[] //正常数组数据
    };
  },
  mounted() {
    //  获取排行榜数据
    this.getrank();
  },

  methods: {
    async getrank() {
      // 发请求，获取分区动态数据
      const result = await this.$API.reqrank(1);
      try {
        if (result) {
          this.rank = result;
          //  console.dir(this.rank)
        }
      } catch (error) {
        alert("失败", error);
      }
      // 第一个数组数据
      this.firstrank=this.rank.slice(0,1) 
      // console.dir(this.firstrank);
      this.normolrank=this.rank.slice(1) 
      
    },
  },
};
</script>

<style lang="less" scoped>
.rank {
  width: 330px;
  height: 435px;
  margin: 20px;
  .rank-tit {
    height: 28px;
    font-size: 28px;
    line-height: 24px;
    padding: 15px 0;
    h3 {
      float: left;
    }
    span {
      width: 50px;
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      float: right;
      margin-right: 8px;
      border: 1px solid #aaaaaa;
      text-align: center;
      &:hover {
        color: #00a1d6;
        cursor: pointer;
      }
    }
  }
  .rank-content {
    .rank-content-item-first {
      height: 68px;
      i {
        width: 16px;
        height: 18px;
        float: left;
        line-height:18px;
        text-align: center;
        border-radius: 2px;
        background-color: #00a1d6;
        color: #fff;
        font-size: 12px;
      }
      img {
        float: left;
        margin-left: 12px;
        width: 110px;
        height: 65px;
        cursor: pointer;
      }
      .rank-content-item-right {
        float: left;
        width: 168px;
        margin: 5px 10px;
        cursor: pointer;
        p {
          font-size: 14px;
          /* 多行文本省略 */
          overflow: hidden;
          text-overflow: ellipsis;
          /* 变成webkit盒子 */
          display: -webkit-box;
          /* 设置纵轴对齐方式 */
          -webkit-box-orient: vertical;
          /* 设置盒子多行显示行数 */
          -webkit-line-clamp: 2;
          &:hover{
            color:#00a1d6;
          }
        }
        span {
          color: #999;
          font-size: 12px;
        }
      }
    }
    .rank-content-item i {
      width: 16px;
      height: 18px;
      float: left;
      text-align: center;
      border-radius: 2px;
      background-color: #00a1d6;
      color: #fff;
      font-size: 12px;
      margin-top: 8px;
    }
    .rank-content-item b {
      width: 16px;
      height: 18px;
      line-height:18px;
      float: left;
      text-align: center;
      color: #999;
      font-size: 14px;
      margin-top: 8px;
    }
    .rank-content-item p {
      font-size: 14px;
      margin-left: 26px;
      height: 37px;
      line-height: 37px;
      /* 多行文本省略 */
      overflow: hidden;
      text-overflow: ellipsis;
      /* 变成webkit盒子 */
      display: -webkit-box;
      /* 设置纵轴对齐方式 */
      -webkit-box-orient: vertical;
      /* 设置盒子多行显示行数 */
      -webkit-line-clamp: 1;
       &:hover{
            color:#00a1d6;
            cursor:pointer;
          }
    }
  }
}
</style>
