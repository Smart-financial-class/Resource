<template>
  <div id="loginBox">
    <div id="left">
      <img
        src="../assets/loginPic2.png"
        alt="login"
        id="loginPic"
        class="undrag"
      />
    </div>
    <div id="right">
      <el-row :gutter="0" class="topBar">
        <el-col :span="4" :offset="2">
          <img
            src="../assets/iF_logo.png"
            alt="iF_logo"
            id="iF_logo"
            class="undrag"
        /></el-col>
      </el-row>
      <div class="textRow">Login for iF</div>
      <el-form
        :model="loginForm"
        ref="loginForm"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="textRow"
            >Sign in</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goRegister" class="textRow"
            >Sign up</el-button
          >
        </el-form-item>
      </el-form>
      <div class="textRow">
        HDU iF(intelligent Financial) &nbsp;&nbsp;&nbsp;&nbsp;<a
          href="http://zhuoyue.hdu.edu.cn/"
          >more?</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const ele = document.querySelector('#loginBox')
      ele.classList.add('animate__animated', 'animate__backOutLeft')
      this.$parent.loginVisibility = 0
    },
    goRegister () {
      // 首先登录盒子飞出
      const ele = document.querySelector('#loginBox')
      ele.classList.add('animate__animated', 'animate__backOutLeft')
      this.$parent.loginVisibility = 0
      // 注册盒子飞入(延迟飞入)
      setTimeout(() => {
        this.$parent.registerVisibility = 1
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
#loginBox {
  width: 900px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  animation: 'bounce' 1s 0.5s;
  box-shadow: 0 0 30px rgba(250, 139, 96, 0.2);
}

#left {
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #fa8b60;
}

#right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  flex-direction: column;
  background-color: #fff;
}

#loginPic {
  position: relative;
  width: 100%;
  object-fit: contain;
}

#iF_logo {
  width: 30px;
}

.topBar {
  margin-top: 20px;
}

.undrag {
  -webkit-user-drag: none;
}

.textRow {
  display: flex;
  justify-content: center;
  font-family: 'iF-Font';
}

// /deep/ .el-form-item__content {
//   margin-left: 0!important;
// }

/deep/ .el-input__inner {
  border-width: 0 0 2px 0;
  border-radius: 0;
}
</style>
