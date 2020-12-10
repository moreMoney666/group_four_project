<template>
  <!-- 整体 -->
  <div class="every">
    <!-- 左边标题和视频播放 -->
    <div class="big">
      <!-- 标题 -->
      <div class="title">
        <div class="titlefont">
          <span class="biaoti">【爆肝600+张原画】干物妹！可莉！</span>
          <br />
          <div class="titlenum">
            <span class="bofang">123.4万播放</span>
            <span class="danmu">3632弹幕</span>
            <span class="time">2020-10-19 22:12:23</span>
          </div>
        </div>
      </div>
      <!-- 视频 -->
      <div class="video">
        <video
          preload="auto"
          controls="controls"
          autoplay="autoplay"
          src="http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4"
          style="width: 624px; height: 100%; outline: none"
        ></video>
      </div>

      <!-- 视频下面的字 -->
      <div class="video-bottom">
        <div class="watching">
          <span class="people">196170</span>人正在看，3633条弹幕
        </div>
        <div class="dati">
          请先答题
          <a href="javascript:;">转正></a>
        </div>
        <span class="fasong">发送</span>
      </div>

      <!-- 图标字体 -->
      <div class="small-logo">
        <i class="iconfont icon-zan">
          <span class="num">5679</span>
        </i>
        <i class="iconfont icon-qian">
          <span class="num">5679</span>
        </i>
        <i class="iconfont icon-arrow">
          <span class="num">5679</span>
        </i>
        <i class="iconfont icon-forward1">
          <span class="num">5679</span>
        </i>
        <span class="tousu">稿件投诉</span>
        <i class="iconfont icon-sandian" style="font-size: 10px"></i>
        <span class="line"></span>
      </div>
    </div>

    <!-- 右边相关 -->
    <div class="right">
      <div class="right-top">
        <!-- <div class="right-top-bottom">
        <img src="./image/ddd.jpg" alt="" style="width:55px;height:55px;">
         <span class="weimu">帷幕VMovie
           <br/>
           <span class="up" style="font-size:5px;">UP主</span>
           <br/>
           按钮
            <div class="button-one" style="margin-top:15px;">
            <button style="border:none;padding:5px 10px 5px 0;background-color:white;"><a href="javascript:;" class="chongdian">为TA充电</a></button>
            <button style="border:none;padding:5px 10px;background-color:white;"><a href="javascript:;" class="guanzhu">
            <i class="iconfont icon-add-fill"></i>关注TA</a></button>
            </div>
         </span>
         <i class="iconfont icon-xinxi" style="margin-left:10px">&nbsp发消息</i>
         
      </div> -->
        <div class="image-touxiang">
          <img src="./image/ddd.jpg" alt="" style="width: 60px; height: 60px" />
        </div>
        <div class="top">
          <a href="">帷幕VMovie</a>
          <a href=""></a>
        </div>
        <div class="center"></div>
        <div class="bottom"></div>
        <!-- 弹幕列表 -->
        <div class="danmu-list">
          弹幕列表
          <i class="iconfont icon-sandian" style="margin-right: 150px"></i>
          展开
        </div>
        <!-- 相关推荐 -->
        <div class="tuijian">相关推荐</div>
        <div class="img-title">
          <img
            src="./image/ddd.jpg"
            alt=""
            style="width: 177px; height: 100px"
          />
          <div class="titleall">
            <div class="titleone">【原神】火之神神乐</div>
            <br />
            <div class="titletwo">江户川肥喵酱</div>
            <div class="titlethree">45.6播放&nbsp1131条弹幕</div>
          </div>
        </div>

        <div class="img-title">
          <img
            src="./image/ddd.jpg"
            alt=""
            style="width: 177px; height: 100px"
          />
          <div class="titleall">
            <div class="titleone">【原神】火之神神乐</div>
            <br />
            <div class="titletwo">江户川肥喵酱</div>
            <div class="titlethree">45.6播放&nbsp1131条弹幕</div>
          </div>
        </div>

        <div class="img-title" style="margin-top: 15px">
          <img
            src="./image/ddd.jpg"
            alt=""
            style="width: 177px; height: 100px"
          />
          <div class="titleall">
            <div class="titleone">【原神】火之神神乐</div>
            <br />
            <div class="titletwo">江户川肥喵酱</div>
            <div class="titlethree">45.6播放&nbsp1131条弹幕</div>
          </div>
        </div>

        <div class="img-title">
          <img
            src="./image/ddd.jpg"
            alt=""
            style="width: 177px; height: 100px"
          />
          <div class="titleall">
            <div class="titleone">【原神】火之神神乐</div>
            <br />
            <div class="titletwo">江户川肥喵酱</div>
            <div class="titlethree">45.6播放&nbsp1131条弹幕</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left",
  beforeCreate() {
    this.bvid = this.$route.bvid;
  },
  data() {
    return {
      redioInfo: {},
      bvid: "",
    };
  },
  mounted() {
    this.getredioInfo();
  },
  methods: {
    // 获取视频
    async getredioInfo() {
      const result = await this.$API.reqVideomsg(this.bvid);
      try {
        if (result) {
          this.redioInfo = result;
        }
      } catch (error) {
        alert("失败", error);
      }
      console.log(result);
    },
  },
};
</script>

<style lang="less" scoped>
.every {
  // background: yellowgreen;
  width: 988px;
  height: 800px;
  margin: 0 auto;
  .big {
    width: 638px;
    height: 100%;
    float: left;
  }
}
.biaoti {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
}
.titlenum {
  font-size: 12px;
  height: 16px;
  color: #999;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video {
  width: 638px;
  height: 447px;
  outline: none;
}
.video-bottom {
  display: flex;
  .dati {
    float: right;
    margin-left: 47px;
    width: 340px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    background-color: #dcdcdc;
    border: #d3d3d3 2px solid;
    a {
      text-decoration: none;
      color: #00a1d6;
    }
  }
  .fasong {
    width: 60px;
    height: 34px;
    line-height: 30px;
    text-align: center;
    font-size: 10px;
    background-color: #a9a9a9;
  }
}
.watching {
  width: 208px;
  height: 34px;
  font-size: 10px;
  text-align: center;
  line-height: 34px;
}
.small-logo {
  margin-top: 10px;
  color: #696969;
  font-size: 50px;
  padding-bottom: 12px;
  border-bottom: solid #e5e9f0 1px;
  .iconfont {
    width: 92px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
    white-space: nowrap;
    color: #505050;
    position: relative;
    font-size: 25px;
  }
  .num {
    margin-left: 20px;
    font-size: 15px;
  }
  .tousu {
    font-size: 12px;
    margin-right: 20px;
    margin-left: 150px;
    color: #505050;
    transition: color 0.3s;
  }
}
.right {
  height: 500px;
  width: 320px;
  // margin-left:1100px;
  float: right;
  // margin-top:-500px;
}
// .right-top-bottom{
//   display: flex;
//   .up{
//     word-wrap:break-word
//   }
// }
// .weimu{
//    color: #666666;
//    font-size: 15px;
//    margin-bottom:10px;
//    float: left;
//    margin-left: 10px;

//   }
.top {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #00a1d6;
}
.chongdian {
  color: #fb7299;
  border: #fb7299;
  text-decoration: none;
  border: #fb7299 1px solid;
  font-size: 15px;
  padding: 5px 15px;
  // background-color: white;
}
.guanzhu {
  text-decoration: none;
  background-color: skyblue;
  color: white;
  border: skyblue 1px solid;
  font-size: 15px;
  padding: 5px 20px;
}

.danmu-list {
  width: 300px;
  height: 45px;
  background-color: gainsboro;
  padding: 0 23px;
  line-height: 45px;
}
.tuijian {
  font-size: 16px;
  color: #222;
  margin-top: 20px;
  margin-bottom: 20px;
}
.img-title {
  color: #222;
}
.titleall {
  margin-left: 200px;
  margin-top: -100px;
}
.titleone {
  font-size: 15px;
}
.titletwo {
  font-size: 15px;
  color: rgb(189, 178, 178);
}
.titlethree {
  margin-top: 5px;
  font-size: 15px;
  color: rgb(189, 178, 178);
}
</style>
