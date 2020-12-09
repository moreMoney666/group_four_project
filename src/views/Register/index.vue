<template>
  <!-- 外层容器 -->
  <div class="register-container">
    <!-- 头部banner -->
    <div class="register-banner">
      <img
        src="//s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"
        alt=""
      />
    </div>
    <!-- 线 -->
    <div class="title-line">
      <span class="tit">注册</span>
    </div>
    <!-- 注册 -->
    <div class="content">
      <div class="username">
        <el-input
          class="common"
          v-model="userMessage.name"
          placeholder="昵称"
        ></el-input>
      </div>
      <div class="password">
        <el-input
          class="common"
          v-model="userMessage.password"
          placeholder="密码（6-16个字符组成）"
        ></el-input>
        <span></span>
      </div>
      <div class="se">
        <div class="country">
          <el-select
            v-model="value"
            placeholder="请选择"
            class="country-select"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input
            placeholder="请输入常用手机号"
            class="el-input"
            v-model="userMessage.phone"
          ></el-input>
        </div>
      </div>
      <div class="note">
        <el-input
          type="text"
          placeholder="请输入短信验证码"
          class="auth-code"
          v-model="userMessage.code"
        ></el-input>
        <el-button type="primary" @click="getCode">点击获取</el-button>
      </div>
      <div class="agreee">
        <input type="checkbox" v-model="userMessage.isAgree" />
        我已同意
        <a href="https://www.bilibili.com/protocal/licence.html" target="_blank"
          >《哔哩哔哩弹幕网用户使用协议》</a
        >
        和
        <a
          href="https://www.bilibili.com/blackboard/privacy-pc.html?spm_id_from=333.39.b_7265676973746572466f726d.2"
          targrt="_blank"
          >《哔哩哔哩隐私政策》</a
        >
      </div>
      <div class="reg">
        <button
          @click="register"
          :style="{
            backgroundColor: userMessage.isAgree ? '#3a8ee6' : '#f5f5f5',
            color: userMessage.isAgree ? '#fff' : 'rgba(0, 0, 0, 0.25)',
          }"
        >
          注册
        </button>
      </div>
      <div class="textTarget">
        <router-link to="/login">已有账号，直接登录</router-link>
        <!-- <a href="">已有账号，直接登录</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { reqRegister, reqCode } from "@/api";
export default {
  name: "",
  data() {
    return {
      userMessage: {
        name: "",
        password: "",
        phone: "",
        code: "",
        isAgree: false,
      },
      options: [
        {
          value: "选项1",
          label: "中国台湾",
        },
        {
          value: "选项2",
          label: "美国",
        },
        {
          value: "选项3",
          label: "比利时",
        },
        {
          value: "选项4",
          label: "日本",
        },
        {
          value: "选项5",
          label: "澳大利亚",
        },
      ],
      value: "中国大陆",
    };
  },
  methods: {
    //获取短信验证码
    async getCode() {
      const { phone } = this.userMessage;
      let result = await reqCode({ phone });
      console.log(result);
      if (result.code === "400") {
        this.$message("手机号已经被注册了");
      }
    },

    // 点击注册
    async register() {
      console.log(111)
      const { phone, name, password, isAgree, code } = this.userMessage;
      if (!name || !password || !phone) {
        this.$message("请输入注册所需信息");
      } else {
        if (!isAgree) return;
        else {
          try {
            let result = await reqRegister({ name, password, phone, code });
            if (result.code === "200") {
              this.$message("注册成功");
              this.$router.push("/login");
            } else if (result.code === "402") {
              this.$message("验证码错误");
            } else if (result.code === "400") {
              this.$message("手机号已经注册");
            }
          } catch (error) {
            this.$message(error || '注册失败')
          }
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  width: 100%;
  .register-banner {
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
      font-size: 56px;
      height: 56px;
      line-height: 56px;
      margin: 0 auto;
      padding: 0 20px;
      background: #ffffff;
      text-align: center;
    }
  }
  .content {
    width: 420px;
    margin: 0 auto;
    font-size: 14px;
    .common {
      margin-top: 30px;
    }
    .se {
      width: 420px;
      margin: 30px auto;
      .country {
        .country-select {
          display: inline-block;
          border: 0px;
          width: 150px;
        }
        .el-input {
          width: 268px;
        }
      }
    }
    .note {
      border-radius: 4px;
      height: 40px;
      margin-top: 30px;
      border: 1px solid #dcdfe6;
      .auth-code {
        width: 320px;
        margin-top: 0;
        border: none;
      }
    }
    .reg {
      width: 100%;
      margin: 0 auto;
      button {
        margin-top: 18px;
        width: 100%;
        height: 40px;
        border: 1px solid #d9d9d9;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.25);
        background-color: #f5f5f5;
      }
    }
    .agreee {
      margin-top: 30px;
      font-size: 12px;
    }
    .textTarget {
      height: 40px;
      line-height: 40px;
      text-align: right;
    }
  }
}
</style>
