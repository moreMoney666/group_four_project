<template>
  <div class="carousel-wrapper">
    <div class="swiper-container left-swiper" id="leftSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="banner">
            <img src="./images/banner01.jpg" />
            <span>集合 集合 集合 ！！！</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner">
            <img src="./images/banner02.jpg" />
            <span>厉害了我的哥！</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner">
            <img src="./images/banner03.jpg" />
            <span>奇妙行为大赏！</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner">
            <img src="./images/banner04.jpg" />
            <span>又要团建了！</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner">
            <img src="./images/banner05.jpg" />
            <span>那些与决赛擦肩而过的佳作！</span>
          </div>
        </div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div
      class="swiper-container swiper-no-swiping right-swiper"
      id="rightSwiper"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in banners"
          :key="index"
        >
          <div class="block" v-for="(item, index) in banner" :key="item.id">
            <div class="info-box">
              <!-- 路由跳转到播放界面 -->
              <a :href="'https://www.bilibili.com/video/'+ item.bvid">
                <img v-lazy="item.imgUrl" />
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="up">
                    <i class="iconfont icon-UPzhu"></i>
                    <span class="name">{{ item.person }}</span>
                  </div>
                  <div class="times">{{ item.parise }}万次播放</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper";
import "swiper/css/swiper.css";
import mock from "@/ajax/mockAjax.js";
export default {
  name: "Carousel",
  data() {
    return {
      banners: [],
    };
  },
  methods: {
    async getRightBanner() {
      // const {data} = await this.$api.home.reqBanner()
      // const result = await this.$API.reqBannerList()
      // console.log(result)
      console.log(this);
      const { data } = await this.$API.reqBannerList();
      console.log(data);
      // const arr = data.slice(0, 6);
      this.banners = [
        //数组截取，截取为三个数组，每个数组里面6个数据，一共18个数据
        data.slice(0, 6),
        data.slice(6, 12),
        data.slice(12, 18),
      ];
      // console.log(this.banners)
      // [
      // data.slice(6,12),
      // data.slice(12,18),
      // ]
      // const a = {a:1}
      // const b = {b:2}
      // const c = {c:3}
      // const arr = [0, 1, 2];
      // let acc = arr.splice(1, 2);
      // console.log(acc);
    },
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        let rightSwiepr = new Swiper("#rightSwiper", {
          // loop: true  , // 循环模式选项
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          effect: "fade",
        });
      });
    },
  },
  mounted() {
    this.getRightBanner();
    //页面最近一次更新
    this.$nextTick(() => {
      let leftSwiepr = new Swiper("#leftSwiper", {
        loop: true, // 循环模式选项
        autoplay: true,
        speed: 1000,
        effect: "fade",
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });
  },
};
</script>

<style lang='less' scoped>
.carousel-wrapper {
  width: 1198px;
  margin: 0 auto;
  display: flex;
  /deep/ .left-swiper {
    .swiper-wrapper {
      width: 550px;
      .swiper-slide {
        .banner {
          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 48px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
            background-repeat: repeat-x;
          }
          img {
            width: 550px;
            height: 242px;
          }
          span {
            display: block;
            width: 70%;
            height: 48px;
            line-height: 48px;
            position: absolute;
            bottom: 0;
            left: 12px;
            color: #ffffff;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
          }
        }
      }
    }
    .swiper-pagination {
      display: flex;
      height: 20px;
      justify-content: flex-end;
      padding-right: 10px;
      box-sizing: border-box;
      .swiper-pagination-bullet {
        display: inline-block;
        margin-left: 10px;
        width: 10px;
        height: 10px;
        border: 2px solid transparent;
        border-radius: 50%;
        background-color: #fff;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.2s;
        box-sizing: border-box;
        opacity: 1;
        &:hover {
          border: 2px solid #fff;
          background-color: #00a1d6;
          transform: scale(1.3);
        }
        &.swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
          border-width: 0;
          border-color: transparent;
          background-color: transparent;
          background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/icon_slide_selected.png);
          background-size: cover;
          background-repeat: no-repeat;
          transform: scale(1.8);
          transition: all 0.2s;
        }
      }
    }
  }
  /deep/ .right-swiper {
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
    }
    .swiper-wrapper {
      width: 638px;
      .swiper-slide {
        width: 638px;
        height: 242px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: space-between;
        align-content: space-between;
        .block {
          width: 206px;
          height: 116px;
          position: relative;
          overflow: hidden;
          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 48px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
            background-repeat: repeat-x;
          }
          &:hover {
            .info-box::before {
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .info-box .info {
              top: 0;
            }
          }
          .info-box {
            width: 206px;
            height: 116px;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
            .info {
              position: absolute;
              top: 66px;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: transparent;
              padding: 26px 10px 10px 10px;
              color: #e0e0e0;
              box-sizing: border-box;
              transition: top 0.2s;
              .title {
                height: 36px;
                line-height: 18px;
                margin-bottom: 6px;
                font-size: 14px;
                color: #ffffff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .up {
                font-size: 12px;
              }
              .times {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev,
    .swiper-button-next {
      background-color: rgba(0, 0, 0, 0.6);
      width: 32px;
      height: 70px;
      opacity: 0;
      transform: translateY(-15px);
      transition: opacity 0.2s ease;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      display: block;
      width: 32px;
      text-align: center;
      font-size: 25px;
      line-height: 70px;
      color: #fff;
    }
  }
}
</style>
