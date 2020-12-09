<template>
  <div>
    <!-- 版心容器 -->
    <div class="container">
      <!-- 动画板块 -->
      <div class="animation">
        <!-- 动画标题 -->
        <div class="animation-tit">
          <div class="animation-tit-left">
            <h3>
              <i class="iconfont icon-donghua1"></i>
              动画
            </h3>
          </div>
          <div class="animation-tit-right">
            <span @click="getdynamic() " >换一换 &nbsp;&nbsp;></span>
            <span>更多 &nbsp;&nbsp;></span>
          </div>
        </div>
        <!-- 动画内容 -->
        <div class="animation-content">
          <!-- 动画项 -->
          <div class="animation-content-item" v-for="(item,index) in newdynamic" :key="index">
            <img
              :src="item.pic"
              style="width:198px;height:128px;"
            />
            <div class="animation-content-item-videodes">
              &nbsp;&nbsp;
              <i class="iconfont icon-bofang"></i>&nbsp; 
              {{item.stat.view}}
              <em class="iconfont icon-dianzan"></em>
               {{item.stat.like}}
              <span> {{item.duration}}</span>
            </div>
            <div class="text">
              <p>{{item.title}}</p>
              <i class="iconfont icon-VIP"></i>
              <span icon-VIP>{{item.owner.name}}</span>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "home",
  data(){
    return{
      dynamic: {}, // 用来接收请求回来的数据
      newdynamic:{}
    }

  },
    
  mounted(){
    //  获取分区动态数据
    this.getdynamic();
  },
  
  methods:{
  async getdynamic() {
    // 发请求，获取分区动态数据
  const result = await this.$API.reqdynamic(1)
  try{
    if (result){
      this.dynamic=result
      //  console.dir(this.dynamic)
    }
  }catch(error){
    alert('失败',error)
  }
  this.newdynamic=this.dynamic.archives.slice(0,8) 
  // console.dir(this.newdynamic);
  }

  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 1500px;
  margin: 50px auto;
  // background-color: #e0b1cb;
  .animation {
    width: 820px;
    height: 500px;
    // background-color: #94d8bc;
    .animation-tit {
      width: 100%;
      height: 70px;
      h3 {
        font-size: 20px;
        font-weight: normal;
        color: #666;
      }
      i{
        font-size:36px;
        vertical-align:middle;
        color:#7b78eb;
        margin-right:10px;
      }
      .animation-tit-left {
        width: 628px;
        height: 70px;
        line-height: 70px;
        float: left;
        font-size: 24px;
      }
      .animation-tit-right {
        float: left;
        padding: 25px 0;
        span {
          width: 80px;
          height: 20px;
          display: block;
          float: left;
          border: 1px solid #aaaaaa;
          text-align: center;
          line-height: 20px;
          color: #666;
          font-size:12px;
          &:first-of-type{
            margin-right:20px;
          }
          &:hover{
            color:#00a1d6;
            cursor: pointer;
          }
        }
      }
    }
    .animation-content {
      height: 800px;
      .animation-content-item {
        height: 208px;
        width: 198px;
        float: left;
        margin-left: 5px;
        cursor: pointer;
        img{
            cursor: pointer;
        }
        .animation-content-item-videodes {
          height: 20px;
          position: relative;
          bottom: 30px;
          font-size:12px;
          color:white;
          left:5px;
          span {
           cursor: pointer;
           position:absolute;
           right:10px;
           bottom:0px;
          }
        }
        .text {
          i {
            float: left;
            margin-top: 2px;
            font-size:24px;
          }
          span {
            display: block;
            margin-top: 10px;
            float: left;
            color: #666;
            font-size:12px;
          }
          p{
             /* 多行文本省略 */
            overflow:hidden;
            text-overflow:ellipsis;
            /* 变成webkit盒子 */
            display:-webkit-box;
            /* 设置纵轴对齐方式 */
            -webkit-box-orient:vertical;
            /* 设置盒子多行显示行数 */
            -webkit-line-clamp:1
          }
        }
      }
    }
  }
}
</style>
