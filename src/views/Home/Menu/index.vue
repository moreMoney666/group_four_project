<template>
  <div class="wrap">
    <!-- 左侧展示部分 -->
    <div class="menu">
      <!-- 页面切换 -->
      <div class="PageTab">
        <ul class="con">
          <li class="li">
            <a href="javascript:;">
              <div class="iconIndex">
                <i class="iconfont icon-gouwo" style="color: green"></i>
              </div>
              <span>首页</span>
            </a>
          </li>
          <li class="li">
            <a href="javascript:;">
              <div class="iconDynamic">
                <i
                  class="iconfont icon-tubiaozhizuomoban-"
                  style="color: red"
                ></i>
              </div>
              <span>动态</span>
            </a>
          </li>
          <li class="li">
            <a href="javascript:;">
              <div class="iconTop">
                <i class="iconfont icon-paihangbang" style="color: yellow"></i>
              </div>
              <span>排行榜</span>
            </a>
          </li>
          <li class="li">
            <a href="javascript:;">
              <div class="iconChannel">
                <i class="iconfont icon-pindao" style="color: purple"></i>
              </div>
              <span>频道</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 分隔线 -->
      <span class="tab-line-itnl"></span>

      <!-- 中间的分区展示 -->
      <div class="channelMenu">
        <!-- popover弹出气泡框 -->
        <!-- placement放置位置 -->
        <!-- popper-class自定义弹出窗口的类名 -->
        <!-- subContainerWidth每个子分区数组的长度 -->
         <!-- :width="subContainerWidth(region.subs)" -->
        <!-- <el-popover
          :placement="index % 2 === 0 ? 'top-start' : 'bottom-start'"
          class="channel"
          popper-class="subContainer"
          width=200px
          trigger="hover"
          v-for="(region, index) in regionList"
          :key="region.id"
        >
          <div class="subChannel">
            <a
              href="javascript:;"
              class="subItem"
              v-for="sub in region.subs"
              :key="sub.id"
              >{{ sub.name }}</a
            >
          </div>

          <a href="javascript:;" slot="reference">
            <span
              >{{ region.name
              }}<em>{{
                onlineList[region.id] > 999 ? "999+" : onlineList[region.id]
              }}</em></span
            >
          </a>
        </el-popover> -->
        
         <div class="channel">
          
            <a
              href="javascript:;"
              class="subItem"
              ><span>动画<em>999+</em></span></a
            >
              <a
              href="javascript:;"
              class="subItem"
              ><span>音乐<em>999+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>游戏<em>999+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>娱乐<em>999+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>电视剧<em>88</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>番剧<em>0</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>电影<em>66</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>知识<em>999+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>鬼畜<em>786</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>舞蹈<em>786</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>时尚<em>99+</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>生活<em>99+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>国创<em>99+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>纪录片<em>99+</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>影视<em>99+</em></span></a
            >
            <a
              href="javascript:;"
              class="subItem"
              ><span>数码<em>99+</em></span></a
            >
             <a
              href="javascript:;"
              class="subItem"
              ><span>资讯<em>99+</em></span></a
            >
              <a
              href="javascript:;"
              class="subItem"
              ><span>美食<em>99+</em></span></a
            >

            

            
          </div>
      </div>

      <!-- 分隔线 -->
      <span class="tab-line-itnl"></span>

      <!-- 右侧导航部分 -->
      <div class="frinedShipLink">
        <div class="link">
          <a href="javascript:;">
            <i class="iconfont icon-zhuanlan" style="color: skyblue"></i>
            <span>专栏</span>
          </a>
        </div>
        <div class="link">
          <a href="javascript:;">
            <i class="iconfont icon-zhibo" style="color: pink"></i>
            <span>直播</span>
          </a>
        </div>
        <div class="link">
          <a href="javascript:;">
            <i class="iconfont icon-huodongzhuanqu" style="color: green"></i>
            <span>活动</span>
          </a>
        </div>
        <div class="link">
          <a href="javascript:;">
            <i
              class="iconfont icon-tubiaozhizuomoban"
              style="color: hotpink"
            ></i>
            <span>课堂</span>
          </a>
        </div>
        <div class="link">
          <a href="javascript:;">
            <i class="iconfont icon-cs-xchz-1" style="color: orange"></i>
            <span>小黑盒</span>
          </a>
        </div>
        <div class="link">
          <a href="javascript:;">
            <i class="iconfont icon-yinle1" style="color: red"></i>
            <span>音乐PLUS</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  // data() {
  //   return {
  //     regionList: [],
  //     onlineList: new Array(18).fill("-"), //创建一个数组，并给予赋值,18个-
  //   };
  // },
  // methods: {
  //   // // 根据每个子分区数组的长度，计算每个popover的宽度
  //   // let width = 0
  //   // for(let i = 0;i<subs.length){
  //   //   let maxLen= 0
  //   // }
  //   // },
  //   async getRegion() {
  //   const result = await this.$api.home.reqRegion();
  //   this.regionList = result;
  // },
  // async getOnline() {
  //   const result = await this.$api.home.reqOnline();
  //   this.onlineList = result;
  // },
  // },
  // mounted() {
  //   this.getRegion();
  //   this.getOnline();
  // },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1198px;
  margin: 0 auto;
  .menu {
    padding: 20px 0;
    display: flex;
    flex-direction: row; //row我默认值。灵活的项目将水平显示，正如一个行一样。
    align-items: center; //居中对齐弹性盒的各项 <div> 元素：
    .PageTab {
      .con {
        display: flex;
        flex-direction: row;
      }
      .con .li {
        text-align: center;
        width: 50px;
        height: 68px;
        font-size: 14px;
      }
      .con .li div {
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: 36px;
        border-radius: 50%;
        margin: 0 auto 4px;
      }
      .con .li .iconIndex {
        background-color: #ff5c7c;
      }
      .con .li .iconDynamic {
        background-color: #fcba2a;
      }
      .con .li .iconTop {
        background-color: #00a1d6;
      }
      .con .li .iconChannel {
        background-color: #6dc781;
      }
    }
    .channelMenu {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap; //让弹性盒元素在必要的时候拆行;
      justify-content: space-evenly; //justify-content: space-evenly可以使每个元素之间和元素距离边距的距离都相等
      height: 68px;
      flex: auto; //flex: auto 等同于 flex: 1 1 auto ，它根据元素的 width 或 height 属性调整元素的大小，但是其非常灵活，以便让它们吸收沿主轴的任何额外空间。
      width: 746px;
      .channel {
        width: 100%;
        flex-wrap: wrap;
        word-wrap: break-word;
        height: 34px;
        font-size: 14px;
        display: flex;
        align-items: center;
        // position: relative;
        a {
          word-break: break-all;
          display: flex;
          align-items: center;
          justify-content: space-evenly; //justify-content: space-evenly可以使每个元素之间和元素距离边距的距离都相等
          // margin-bottom: 1px;
          margin-right: 17px;
          em {
            font-style: normal;
            width: 32px;
            text-align: center;
            font-size: 12px;
            display: inline-block;
            background: #73c9e5;
            border-radius: 2px;
            color: #ffffff;
            margin-left: 4px;
          }
        }
      }
      // .subContainer .subChannel {
      //   display: flex;
      //   flex-direction: column;
      //   flex-wrap: wrap;
      //   align-items: flex-start;
      //   max-height: 148px;
      //   background-color: #ffffff;
        // .subItem {
        //   font-size: 12px;
        //   white-space: nowrap;
        //   padding: 10px 13px;
        //   height: 37px;
        //   box-sizing: border-box;
        // }
      // }
    }
    .frinedShipLink {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 68px;
      width: 220px;
      flex: auto;
      .link {
        height: 34px;
        line-height: 34px;
        a {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          font-size: 14px;
          .iconfont {
            font-size: 24px;
          }
        }
      }
    }
    .tab-line-itnl {
      height: 46px;
      border-left: 1px solid #e7e7e7;
      margin: 6px;
    }
  }
}
</style>
