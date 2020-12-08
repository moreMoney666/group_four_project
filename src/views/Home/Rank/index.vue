<template>
  <div class="rank">
    <!-- 排行榜标题 -->
    <div class="rank-tit">
      <h3>排行榜 </h3>
      <span>更多&nbsp;></span>
    </div>
    <!-- 排行榜内容 -->
    <div class="rank-content">
      <!-- 第一个排行榜项-带图片 -->
      <div class="rank-content-item-first">
        <i>1</i>
        <img src="./images/rank_01.jpg">
        <div class="rank-content-item-right">
            <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            <span>综合得分：284.5</span>
        </div>
      </div>
         <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
               <i>2</i>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
            <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
               <i>3</i>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
            <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
                <b>4</b>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
            <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
                <b>4</b>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
            <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
                <b>4</b>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
                   <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
               <b>3</b>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>
            <!-- 排行榜项目 -->
          <ul class="rank-content-item">
            <li>
                <b>4</b>
                <p>有生之年！神作即将返厂，这才是霸权动漫！</p>
            </li>
            
        </ul>

      </div>
    </div>
</template>

<script>
export default {
  name: "rank",
};
</script>

<style lang="less" scoped>
.rank {
  width: 330px;
  height: 435px;
  margin:20px;
  .rank-tit {
    height: 28px;
    font-size: 28px;
    line-height: 24px;
    padding:15px 0;
    h3{
      float:left;
    }
    span {
      width: 50px;
      height: 20px;
      line-height:20px;
      font-size:10px;
      float:right;
      margin-right:8px;
      border: 1px solid #aaaaaa;
      text-align:center;
      &:hover{
        color:#00a1d6;
        cursor: pointer;
      }
    }
  }
  .rank-content{
    .rank-content-item-first{
      height:65px;
      i{
        width:16px;
        height:18px;
        float:left;
        text-align:center;
        border-radius: 2px;
        background-color:#00a1d6;
        color:#fff;
        font-size:12px;
      }
      img{
        float:left;
        margin-left:12px;
        cursor: pointer;
      }
      .rank-content-item-right{
        float:left;
        width:168px;
        margin:5px 10px ;
        cursor: pointer;
        p{
         font-size:14px;
         /* 多行文本省略 */
        overflow:hidden;
        text-overflow:ellipsis;
        /* 变成webkit盒子 */
        display:-webkit-box;
        /* 设置纵轴对齐方式 */
        -webkit-box-orient:vertical;
        /* 设置盒子多行显示行数 */
        -webkit-line-clamp:2
        }   
        span{
          color:#999;
          font-size:10px;
        }      
         
      }
    }
      .rank-content-item i {
        width:16px;
        height:18px;
        float:left;
        text-align:center;
        border-radius: 2px;
        background-color:#00a1d6;
        color:#fff;
        font-size:12px;
        margin-top:8px;
      }
       .rank-content-item b {
        width:16px;
        height:18px;
        float:left;
        text-align:center;
        color:#999;
        font-size:14px;
        margin-top:8px;
      }
       .rank-content-item p {
        font-size:14px;
        margin-left:26px;
        height:36px;
        line-height:36px;
        color:#666;
        
      }

  }
}
</style>
