<template>
  <div class="login-container">
    <!-- 顶部图片 -->
    <div class="top-banner">
      <img
        src="//s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"
      />
    </div>
    <!-- 线 -->
    <div class="title-line">
      <span class="tit" style="font-size: 34px">登录</span>
    </div>
    <!-- 登录主要内容 -->
    <div class="login-box">
      <!-- 左侧 -->
      <div class="login-left">
        <div class="login-left">
          <div class="qrcode-login">
            <div class="qrcode-con">
              <i class="tv-icon"></i>
              <div class="qrcode-box">
                <div class="qrcode-img">
                  <!-- <canvas width="140px" height="140px" display = "none" ></canvas> -->
                  <img src="./images/qr-code.png" alt="" />
                </div>
              </div>
            </div>
            <div class="qrcode-footer">
              <p class="status-text">二维码失效</p>
              <p class="app-link">
                请使用
                <a href="//app.bilibili.com/" target="_blank">哔哩哔哩客户端</a>
                <br />
                扫码登录
                <br />
                或扫码下载
              </p>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="line"></div>
      <!-- 右侧 -->
      <div class="login-right">
        <div class="from-login">
          <div class="input-box">
            <div class="type-tab">
              <span class="active">密码登录</span>
              <span>短信登录</span>
            </div>
            <div>
              <div class="username">
                <el-form
                  ref="accoutValidateForm"
                  label-width="100px"
                  class="demo-ruleForm"
                  :model="accoutValidateForm"
                  :rules="addrules"
                >
                  <el-form-item prop="phone" label-width="0">
                    <el-input
                      autocomplete="off"
                      class="common"
                      v-model="accoutValidateForm.phone"
                      placeholder="你的手机号/邮箱"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="password" label-width="0">
                    <el-input
                      type="password"
                      autocomplete="off"
                      class="common"
                      v-model="accoutValidateForm.password"
                      placeholder="请输入你的密码"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>

              <div class="remember">
                <input name="m1" type="checkbox" class="check-box" checked />
                记住我
                <span class="computed">不是自己的电脑上不要勾选此选项</span>
                <a
                  href="https://www.bilibili.com/blackboard/help.html#/?qid=5368e921a61142c38284fed131ae64d7"
                  target="_blank"
                  class="first_a"
                >
                  无法验证?
                </a>
                <a href="javascipt:;;"> 忘记密码？</a>
              </div>
              <div class="button_two">
                <button class="btn1" @click.prevent="login">
                  登&nbsp;&nbsp;录
                </button>
                <button class="btn2" @click.prevent="register">
                  注&nbsp;&nbsp;册
                </button>
                <!-- <router-link to="/register" class="btn2" ></router-link> -->
              </div>
              <div class="sns">
                <a class="weibo" style="color: #717171"> 微博账号登录</a>
                <a class="qq" style="color: #717171"> QQ账号登录</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="login-footer">
      <p>
        <span>登录即代表你同意</span>
        <a href="" target="blank">用户协议</a>
        <span>和</span>
        <a href="" target=" ">隐私政策</a>
      </p>
    </div>
  </div>
</template>

<script>
import ajax from "@/ajax/ajax";
export default {
  name: "Login",
  data() {
    const checkphone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        callback(new Error("请输入您常用的手机号和邮箱"));
      } else if (!phoneReg.test(value) && !mailReg.test(value)) {
        callback(new Error("输入格式错误"));
      } else {
        callback();
      }
    };
    return {
      accoutValidateForm: {
        phone: "",
        password: "",
      },
      addrules: {
        phone: [{ trigger: "blur", validator: checkphone }],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击登录回调
    login() {
      this.$refs.accoutValidateForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch("login", this.accoutValidateForm);
        } else {
          return false;
        }
      });
    },
    // 路由跳转
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;

  .top-banner {
    background: #00a0d8;
    height: 86px;
    text-align: center;
    margin-bottom: 20px;
  }

  .title-line {
    width: 980px;
    height: 28px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 28px;
    text-align: center;

    .tit {
      font-size: 34px;
      height: 56px;
      line-height: 56px;
      margin: 0 auto;
      padding: 0 20px;
      background: #ffffff;
      text-align: center;
    }
  }

  .login-box {
    width: 980px;
    margin: 0 auto;
    display: flex;

    .login-left {
      width: 489px;

      .qrcode-login {
        position: relative;
        width: 480px;
        height: 264px;

        .qrcode-con {
          width: 480px;
          height: 192px;
          padding-top: 72px;

          .tv-icon {
            position: absolute;
            left: 156px;
            top: 10px;
            display: block;
            width: 70px;
            height: 70px;
            background: url("./images/tv.png") no-repeat;
          }

          .qrcode-box {
            position: absolute;
            width: 140px;
            left: 164px;
            top: 73px;
            height: 140px;
            margin: 0 auto;

            .qrcode-img {
              background: url("//s1.hdslb.com/bfs/static/passport/static/img/loadTV.99606e2.gif")
                50% no-repeat; // s1.hdslb.com/bfs/static/passport/static/img/loadTV.99606e2.gif 50% no-repeat;
            }
          }
        }

        .qrcode-footer {
          position: absolute;
          left: -7px;
          top: 264px;
          width: 480px;
          height: 155px;
          background: url("//s1.hdslb.com/bfs/static/passport/static/img/2233login.af9c53d.png")
            0 -7px no-repeat; // s1.hdslb.com/bfs/static/passport/static/img/2233login.af9c53d.png) 0 -7px no-repeat

          .status-text {
            padding-top: 20px;
            text-align: center;
            color: #222;
            font-size: 18px;
            letter-spacing: 3px;
            margin-bottom: 5px;
          }

          .app-link {
            text-align: center;
            color: #717171;
            font-size: 14px;
          }
        }
      }
    }

    .line {
      width: 1px;
      border-right: 1px solid #ddd;
      height: 300px;
      margin-top: 28px;
    }

    .login-right {
      width: 490px;
      padding-left: 45px;
      box-sizing: border-box;

      .from-login {
        .input-box {
          margin-top: 50px;
          width: 414px;

          .type-tab {
            .active {
              color: #02a7de;
            }

            span {
              font-size: 14px;
              color: #555;
              letter-spacing: 0;
              margin-right: 20px;
            }
          }
        }

        .username {
          height: 160px;

          .demo-ruleForm {
            .common {
              margin: 10px 0;
            }
          }
        }

        .remember {
          margin: 10px 0;
          color: #717171;
          width: 410px;
          height: 14px;
          line-height: 14px;
          font-size: 12px;
          vertical-align: center;

          .check-box {
            display: inline-block;
            width: 14px;
            background-size: 14px 14px;
            background-position: 50%;
            cursor: pointer;
          }

          .computed {
            display: inline-block;
            color: #bbb;
            margin-left: 10px;
          }

          .first_a {
            margin-left: 20px;
            margin-right: 20px;
          }
        }

        .button_two {
          display: flex;
          justify-content: space-around;
          align-content: center;
          margin-top: 30px;

          button {
            color: #555;
            display: inline-block;
            height: 36px;
            border: 1px solid #ccc;
            border-radius: 2px;
            width: 184px;
            line-height: 38px;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
          }

          .btn1 {
            border: 1px solid #0381aa;
            color: #fff;
            background-color: #00a7de;
          }
        }

        .sns {
          margin: 20px 0;

          .weibo:before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("./images/weibo.png") no-repeat;
            vertical-align: middle;
            margin-right: 5px;
          }

          .qq:before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("./images/qq.png") no-repeat;
            vertical-align: middle;
            margin-left: 15px;
          }
        }
      }
    }
  }

  .login-footer {
    width: 980px;
    height: 50px;
    margin: 30px auto;
    line-height: 50px;
    text-align: center;

    span {
      color: #bbb;
    }
  }
}
</style>
