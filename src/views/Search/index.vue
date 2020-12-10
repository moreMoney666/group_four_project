<template>
  <div class="searchContainer">
    <div class="header">
      <!-- 搜索 -->
      <div class="logoSearch">
        <div class="logo"></div>
        <div class="search">
          <input type="text" v-model="keyword" @keyup.enter="toSearch" />
          <button @click="toSearch">搜索</button>
        </div>
      </div>
      <!-- 菜单 -->
      <div class="typeNav clearfix">
        <ul>
          <li :class="{ active: isBorder === 0 }" @mouseenter="isBorder = 0">
            综合
          </li>
          <li :class="{ active: isBorder === 1 }" @mouseenter="isBorder = 1">
            视频<span>99+</span>
          </li>
          <li :class="{ active: isBorder === 2 }" @mouseenter="isBorder = 2">
            番剧<span>0</span>
          </li>
          <li :class="{ active: isBorder === 3 }" @mouseenter="isBorder = 3">
            影视<span>0</span>
          </li>
          <li :class="{ active: isBorder === 4 }" @mouseenter="isBorder = 4">
            直播<span>11+</span>
          </li>
          <li :class="{ active: isBorder === 5 }" @mouseenter="isBorder = 5">
            专栏<span>99+</span>
          </li>
          <li :class="{ active: isBorder === 6 }" @mouseenter="isBorder = 6">
            话题<span>1</span>
          </li>
          <li :class="{ active: isBorder === 7 }" @mouseenter="isBorder = 7">
            用户<span>99+</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 排序方式 -->
    <div class="searchSort">
      <div class="topNav">
        <ul class="comprehensive" @click="tabSwich">
          <li :class="{ active: order === 'totalrank' }">
            <a href="javascript:;" data-order="totalrank">综合排序</a>
          </li>
          <li :class="{ active: order === 'click' }">
            <a href="javascript:;" data-order="click">最多点击</a>
          </li>
          <li :class="{ active: order === 'pubdate' }">
            <a href="javascript:;" data-order="pubdate">最新发布</a>
          </li>
          <li :class="{ active: order === 'dm' }">
            <a href="javascript:;" data-order="dm">最多弹幕</a>
          </li>
          <li :class="{ active: order === 'stow' }">
            <a href="javascript:;" data-order="stow">最多收藏</a>
          </li>
        </ul>
      </div>

      <div class="topNav">
        <ul class="time" @click="tabSwich">
          <li :class="{ active: duration * 1 === 0 }">
            <a data-duration="0" href="javascript:;">全部时长</a>
          </li>
          <li :class="{ active: duration * 1 === 1 }">
            <a data-duration="1" href="javascript:;">10分钟以下</a>
          </li>
          <li :class="{ active: duration * 1 === 2 }">
            <a data-duration="2" href="javascript:;">10-30分钟</a>
          </li>
          <li :class="{ active: duration * 1 === 3 }">
            <a data-duration="3" href="javascript:;">30-60分钟</a>
          </li>
          <li :class="{ active: duration * 1 === 4 }">
            <a data-duration="4" href="javascript:;">60分钟以上</a>
          </li>
        </ul>
      </div>

      <div class="topNav">
        <ul class="partitions" @click="tabSwich">
          <li :class="{ active: tids * 1 === 0 }">
            <a data-tids="0" href="javascript:;">全部分区</a>
          </li>
          <li
            :class="{ active: tids * 1 === item.id }"
            v-for="(item, index) in regionList"
            :key="item.id"
          >
            <a :data-tids="item.id" href="javascript:;">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 主体内容区域 -->
    <div class="content">
      <ul>
        <!-- 视频项 -->
        <li
          class="videoItem"
          v-for="videoItem in searchParams.result"
          :key="videoItem.id"
        >
        <!--href='javascript:; @click="toPlay(videoItem.bvid)" -->
          <a :href="videoItem.arcurl" >
            <!-- 缩略图 -->
            <div class="lazyImg">
              <div class="img">
                <img :src="videoItem.pic" :alt="videoItem.author" />
              </div>
              <!-- 时长 -->
              <!-- <span class="motask"></span> -->
              <span class="videoTime">02:09</span>
            </div>
            <div class="preview">
              <!-- 稍后再看 -->
              <p></p>
            </div>
          </a>

          <!-- 详细信息 -->
          <div class="info">
            <div class="text">
              <span v-html="videoItem.title"></span>
            </div>

            <div>
              <div class="date">
                <span class="watchNum">
                  <i
                    class="iconfont icon-bofang1"
                    style="font-size:5px;color:#999;"
                  ></i>
                  122.1万</span
                >
                <span class="time">
                  <i
                    class="iconfont icon-shijian"
                    style="font-size:12px;color:#333;"
                  ></i>
                  2020-12-06</span
                >
              </div>
              <div class="author">
                <a href="##">
                  <i class="iconfont icon-geren" style="font-size:14px;"></i>
                  {{ videoItem.author }}</a
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="page">
      <Pagination
        :currentPageNum="page"
        :pageSize="searchParams.numPages"
        :total="searchParams.numResults"
        :continueNum="5"
        @changeNum="changeNum"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      isBorder: 0,
      regionList: [],
      keyword: "",
      // 排序 - totalrank：综合排序 - click：最多点击
      // - pubdate：最新发布
      // - dm：最多弹幕
      // - stow：最多收藏

      order: "totalrank",
      // 时长
      duration: "0",
      // 分区
      tids: 0,
      page: 1,
    };
  },
  beforeMount() {
    // let { numResults, page, videoList } = this.paramsData;
    // let searchParams = this.searchParams;
    // numResults = searchParams.numResults;
    // page = searchParams.page;
    // if (searchParams.result) {
    //   videoList = searchParams.result;
    //   videoList.forEach((item) => {
    //     // 上传时间
    //     item.pubdata = this.formatData(item.pubdate);
    //     // 历史播放量
    //     if (item.play >= 10000) {
    //       item.play = Math.round(item.play / 1000) / 10 + "万";
    //     } else {
    //       item.play;
    //     }
    //     let orangeDuration = item.duration;
    //     // 分
    //     let m = orangeDuration.split(":")[0];
    //     if (m >= 60) {
    //       let s = orangeDuration.split(":")[1];
    //       let h = Math.floor(m / 60);
    //       let mRemainder = m % 60;
    //       item.duration = `${h}:${mRemainder}:${s}`;
    //     } else {
    //       item.duration;
    //     }
    //   });
    // } else {
    //   videoList = [];
    // }
    // searchParams = {
    //   ...this.paramsData,
    //   numResults,
    //   page,
    //   videoList,
    // };
    // this.paramsData = searchParams;
    // console.log(this.paramsData);
    // this.init();
  },
  mounted() {
    this.getRegion();
    this.getSearch();
  },
  methods: {
    //点击分页器的按钮改变页码
    changeNum(page){
      this.page = page

      this.getSearch()
    },
    // 点击视频播放
    toPlay(bvid) {
      this.$router.push({ path: `/video/${bvid}` });
    },
    getSearch() {
      this.$store.dispatch("getSearch", { params: this.$route.query });
    },
    // 搜索
    toSearch() {
      if (this.keyword.trim()) {
        this.$router.push({
          path: "/search",
          query: {
            ...this.$route.query,
            keyword: this.keyword,
          },
        });
        this.getSearch();
      }
    },

    // 排序搜索
    tabSwich(event) {
      // console.log(event);
      // if(event.target)
      let target = event.target;
      let data = target.dataset;
      // console.log(data)
      if (data.order) {
        // this.order = data.order
        this.$router.push({
          path: "/search",
          query: {
            ...this.$route.query,
            order: data.order,
          },
        });
      } else if (data.duration) {
        // this.duration = data.duration
        let order;
        if (!this.$route.query.order) {
          order = "totalrank";
        }

        this.$router.push({
          path: "/search",
          query: {
            order: order,
            ...this.$route.query,
            duration: data.duration,
          },
        });
      } else if (data.tids) {
        // this.tids = data.tids
        this.$router.push({
          path: "/search",
          query: {
            ...this.$route.query,
            tids: data.tids,
          },
        });
      }

      // this.getSearch()
    },
    async getRegion() {
      let result = await this.$API.reqRegion();
      // console.log(result);
      this.regionList = result;
    },
  },
  computed: {
    ...mapState({
      searchParams: (state) => state.search.searchParams,
    }),
  },
  watch: {
    $route() {
      this.keyword = this.$route.query.keyword || "";
      this.order = this.$route.query.order || "totalrank";
      this.duration = this.$route.query.duration || 0;
      this.tids = this.$route.query.tids || 0;
      this.getSearch(this.$route.query);
    },
  },
};
</script>

<style lang="less" scoped>
.searchContainer {
  margin: 0 auto;
  width: 980px;
  // background: pink;
  // height: 2200px;
  padding: 40px 0 0 0;
  // overflow: hidden;

  // 头部
  .header {
    width: 100%;
    height: 158px;
    // background: yellowgreen;
    position: relative;

    // 搜索区域
    .logoSearch {
      width: 587px;
      height: 35px;
      // background: skyblue;
      margin: 0 auto;

      .logo {
        width: 131px;
        height: 35px;
        background: url(../../assets/s01.png) no-repeat;
        background-position: -261px -72px;
        float: left;
        margin-top: 7px;
      }
      // 搜索框
      .search {
        float: right;
        input {
          width: 330px;
          height: 44px;
          box-sizing: border-box;
          padding: 11px 15px;
          border-radius: 5px;
          border: 2px solid #777;
          margin-right: 5px;
        }
        button {
          width: 90px;
          height: 42px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          background: #00a1d6;
          border: none;
        }
      }
    }

    // 分类导航
    .typeNav {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 56px;
      border-bottom: 1px solid #999;
      li {
        font-size: 16px;
        float: left;
        height: 100%;
        width: 12.5%;
        line-height: 56px;
        cursor: pointer;
        text-align: center;
        span {
          font-size: 12px;
          color: #6d757a;
          margin-left: 5px;
        }
        &.active {
          border-bottom: 2px solid #00a1d6;
        }
      }
    }
  }

  // 排序方式
  .searchSort {
    width: 100%;
    height: 121px;
    padding: 20px 0;
    box-sizing: border-box;
    // background: pink;
    .topNav {
      height: 20px;
      margin: 0 0 10px 0;

      ul {
        height: 100%;
        li {
          float: left;
          margin-right: 15px;
          padding: 0 8px;
          line-height: 20px;
        }
        &.partitions {
          li {
            margin: 0;
          }
        }
        li.active {
          background: #00a1d6;
          height: 20px;
          border-radius: 5px;
          a {
            color: #fff !important;
          }
        }
      }
    }
  }

  // 主体
  .content {
    width: 100%;
    height: 920px;
    // background: chartreuse;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    ul {
      width: 100%;
    }

    .videoItem {
      float: left;
      width: 170px;
      box-sizing: border-box;
      height: 210px;
      margin: 20px 26px 0 0;
      // background: hotpink;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      // 视频区域
      .img {
        width: 168px;
        height: 100px;
        position: relative;
        img {
          display: block;
          border-radius: 5px 5px 0 0;
          width: 100%;
          height: 100%;
        }
        // 模态框
        // .motask{
        //   width: 100%;
        //   height: 100%;
        //   // display: none;
        //   // background: rgba(0, 0, 0, 0.5);
        //   background: rosybrown;
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        // }
      }

      .lazyImg {
        position: relative;
        .videoTime {
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          // font-weight: 700;
          color: #fff;
          padding: 0 3px;
          border-radius: 2px;
          background: rgba(0, 0, 0, 0.3);
        }
      }
      // 底部信息
      .info {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        height: 110px;
        box-sizing: border-box;
        .text {
          height: 32px;
          margin-bottom: 20px;
          // white-space: nowrap;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          // text-overflow: ellipsis;
        }
        .date {
          height: 12px;
          margin-bottom: 12px;
          .watchNum {
            // width: 41px;
            float: left;
          }
          .time {
            // width: 67px;
            float: right;
          }
        }
        .author {
          float: left;
        }
      }
    }
  }

  // 分页
  .page{
    width: 100%;
    height: 105px;
    // background: pink;
    box-sizing: border-box;
    text-align: center;
    padding: 30px 27px 35px;
    margin: 0 1px 5px;
  }
}
</style>
