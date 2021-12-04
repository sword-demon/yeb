<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="login-container">
      <h3 class="login-title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" auto-complete="off" v-model="loginForm.username" placholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" auto-complete="off" v-model="loginForm.password" placholder="请输入密码"></el-input>
      </el-form-item>
      <!--加上prop才会和校验规则有用-->
      <el-form-item prop="code">
        <el-input style="width: 250px;margin-right: 5px;" type="text" auto-complete="off" v-model="loginForm.code"
                  placholder="点击图片更换验证码"></el-input>
        <img :src="captchaUrl" alt="" @click="updateCaptcha">
      </el-form-item>
      <el-checkbox v-model="checked" class="login-remember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%;" @click="submitLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 验证码地址
      captchaUrl: '/captcha?time=' + new Date(),
      loginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      // 默认选中
      checked: true,
      // 表单验证
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        code: [{required: true, message: '请输入验证码', trigger: 'blur'}],
      }
    }
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert("submit !")
        } else {
          this.$message.error('please input all contents')
          return false
        }
      })
    },
    updateCaptcha() {
      this.captchaUrl = '/captcha?time=' + new Date()
    }
  }
}
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
}

.login-remember {
  text-align: left;
  margin: 0 0 15px 0;
}
.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
