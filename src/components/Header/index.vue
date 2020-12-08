<template>
  <!-- 头部区域 -->
  <!-- 非Home页的头部为短版 -->
  <header class="header" :class="{header:true,shortHeader:$route.meta.isHeaderHidden}">
    <!-- 头部整体内容 -->
    <div class="headerContent">
      <!-- 导航条 -->
      <div class="nav">
        <ul class="navList">
          <li class="navItem">
              <span><i class="iconfont icon-bofangqi-zantingxiaodianshi" ></i></span>
            <!-- <a href="##" style="margin-left:3px;">
            主站</a> -->
            <router-link to='/home'>主站</router-link>
          </li>
          <li class="navItem">
            <a 
              href="https://www.bilibili.com/anime/?spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.2"
              >番剧</a
            >
          </li>
          <li class="navItem">
            <a href="javascript:;">游戏中心</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">直播</a>
          </li>
          <li class="navItem">
            <a
              href="https://show.bilibili.com/platform/home.html?msource=pc_web&spm_id_from=666.4.b_696e7465726e6174696f6e616c486561646572.5"
              >会员购</a
            >
          </li>
          <li class="navItem">
            <a
              href="https://manga.bilibili.com/?from=bill_top_mnav&spm_id_from=666.4.b_696e7465726e6174696f6e616c486561646572.6"
              >漫画</a
            >
          </li>
          <li class="navItem">
            <a href="javascript:;">赛事</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">
              <div class="changwanBox">
                <div class="changwan">
                  <p>BW</p>
                </div>
              </div>
            </a>
          </li>
          <li class="navItem">
            <a
              class="navLink"
              href="https://app.bilibili.com/?spm_id_from=666.4.b_696e7465726e6174696f6e616c486561646572.9"
            >
              <i class="iconfont icon-shouji"></i>
              下载APP
            </a>
          </li>
        </ul>
      </div>

      <!-- 搜索框 -->
      <div class="search">
        <form id="navSearchForm">
          <input type="text" v-model="keyword" placeholder="大别野里的小富婆，她快乐吗?" />
          <div><i class="iconfont icon-sousuo" @click="toSearch"></i></div>
        </form>
      </div>

      <!-- 登录注册投稿区域 -->
      <div class="loginRegcontribution">
        <!-- 登录注册 -->
        <div class="loginReg">
          <!-- <div>
            <a href="">
              <img src="./images/avater.jpg" alt="">
              个人中心
            </a>
          </div> -->
          <div>
            <span>登录</span>
            <span>注册</span>
          </div>
        </div>

        <!-- 投稿 -->
        <div class="contribution">
          <span>投稿</span>
        </div>
      </div>
    </div>

    <!-- logo区域 -->
    <div class="coreContainer bLogo bWrap">
      <!-- logo -->
      <a href="javascript:;" class="logo">
        <img src="./images/logo.png" alt="" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  computed: {},
  methods: {
    toSearch(){
      this.$router.push(`/search?keyword=${this.keyword}`)
    }
  },
};
</script>

<style lang="less" scoped>
// 头部样式
.header {
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  background-image: url(./images/himg1.png);
  color: #fff;
  a {
    color: #ffffff;
  }

  // 头部整体内容样式
  .headerContent {
    width: 100%;
    height: 56px;
    position: relative;
    z-index: 100;
    font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    line-height: 30px;
    margin: 0 auto;
    padding: 10px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    // 导航条样式
    .nav {
      // navList样式
      .navList {
        width: 500px;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navItem {
          margin-right: 12px;
          .navLink {
            .iconfont {
              font-size: 14px;
            }
          }
        }
      }
    }

    // 搜索框样式
    .search {
      width: 500px;
      height: 36px;
      position: relative;
      line-height: 36px;
      #navSearchForm {
        width: 100%;
        height: 100%;
        input {
          width: 100%;
          height: 36px;
          box-shadow: none;
          color: #999;
          font-size: 14px;
          border: none;
          box-sizing: border-box;
          padding: 1px 0;
          padding-left: 20px;
          line-height: 34px;
          outline: none;
        }
        .iconfont {
          width: 48px;
          height: 36px;
          background: #e7e6e6;
          position: absolute;
          top: 0;
          right: 0;
          line-height: 36px;
          text-align: center;
          color: #666;
          font-weight: 700;
          &:hover {
            cursor: pointer;
          }
        }
      }
      // 下拉框样式
      .downFrame {
        display: block;
        width: 100%;
        position: absolute;
        top: 36px;
        .downFrameList {
          width: 100%;
          border: 1px solid #e5e9ef;
          box-sizing: border-box;
          margin-top: 1px;
          background: #fff;
          .downFrameItem {
            width: 100%;
            height: 32px;
            padding: 0 16px;
            box-sizing: border-box;
            cursor: pointer;
            &:hover {
              background: #f4f4f4;
            }
          }
        }
      }
    }

    // 登录注册投稿样式
    .loginRegcontribution {
      width: 231px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      // 登录注册样式
      .loginReg {
        widows: 117px;
        height: 36px;
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          line-height: 32px;
          vertical-align: middle;
          &:hover {
            cursor: pointer;
          }
        }
        span {
          font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue,
            Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
            sans-serif;
          vertical-align: middle;
          line-height: 36px;
          padding-left: 5px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      // 投稿样式
      .contribution {
        width: 100px;
        height: 36px;
        color: #fff;
        background: #fb7299;
        margin-left: 14px;
        text-align: center;
        line-height: 36px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  // logo 区域样式
  .coreContainer {
    // position: absolute;
    // left: 0;
    // right: 0;
    // margin: 0 auto;
    // bottom: 0;
    display: block;
    width: 1198px;
    // height: 100%;
    margin: 0 auto;
    a {
      height: 105px;
      width: 220px;
      // position: absolute;
      left: 0;
      bottom: 30px;
    }
    .logo {
      width: 220px;
      height: 50%;
    }
  }
}
.shortHeader {
  color: #212121;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  a {
    color: #212121;
  }
  .headerContent .search #navSearchForm {
    input {
      background-color: #f4f4f4;
    }
    button {
      background-color: #505050;
    }
  }

  .coreContainer {
    display: none;
  }
}
</style>
