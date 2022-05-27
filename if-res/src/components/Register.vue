<template>
  <div id="registerBox">
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
      <div class="textRow">Register for iF</div>
      <el-form
        :model="registerForm"
        ref="registerForm"
        label-width="80px"
        :inline="false"
        size="normal"
        :rules="rules"
      >
        <el-row class="inputRow">
          <el-col :span="10" :offset="2">
            <el-form-item prop="username">
              <el-input
                v-model="registerForm.username"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <!-- 手机号 -->
            <el-form-item prop="phone">
              <el-input
                v-model="registerForm.phone"
                placeholder="手机号"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 密码，一行 -->
        <el-row class="inputRow">
          <el-col :span="22" :offset="2">
            <el-form-item prop="password">
              <el-input
                v-model="registerForm.password"
                placeholder="密码"
                type="password"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 重复密码，一行 -->
        <el-row class="inputRow">
          <el-col :span="22" :offset="2">
            <el-form-item prop="confirmPassword">
              <el-input
                v-model="registerForm.confirmPassword"
                placeholder="重复密码"
                type="password"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 邮箱 -->
        <el-row class="inputRow">
          <el-col :span="22" :offset="2">
            <el-form-item prop="email">
              <el-input
                v-model="registerForm.email"
                placeholder="邮箱"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="inputRow">
          <el-col :span="5" :offset="7">
            <el-button type="primary" @click="onSubmit" class="textRow">
              Sign up
            </el-button>
          </el-col>
          <el-col :span="5" :offset="3">
            <el-button type="primary" @click="resetForm" class="textRow">
              Reset
            </el-button>
          </el-col>
        </el-row>
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
      registerForm: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: ''
      },
      rules: {
        // 表单校验规则
        username: [
          {
            required: true,
            message: '请输入用户名！',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码！',
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: '请再次输入密码！',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === this.registerForm.password) {
                callback()
              } else {
                callback(new Error('两次输入的密码不一致！'))
              }
            },
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱！',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号！',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (/^1[3456789]\d{9}$/.test(value)) {
                callback()
              } else {
                callback(new Error('手机号格式不正确！'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      if (this.checkRegisterForm()) {
        await this.$axios({
          method: 'POST',
          url: 'http://localhost:7001/user/register',
          data: this.registerForm
        }).then((response) => {
          console.log(response)
          if (response.data === 'ok') {
            // 注册盒子向右飞出
            const ele = document.querySelector('#registerBox')
            ele.classList.add('animate__animated', 'animate__backOutRight')
            this.$parent.registerVisibility = 0
          }
          return response
        }).catch((error) => {
          console.log(error)
          this.$message({
            message: error.message,
            type: 'error'
          })
        })
      }
    },
    checkRegisterForm () {
      // 进行前端校验
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          // 后端校验
          await this.$axios({
            method: 'POST',
            url: 'http://localhost:7001/user/check',
            data: this.registerForm
          }).then((response) => {
            if (response.data === 'ok') {
              return true
            } else {
              this.$message({
                message: response.data,
                type: 'error'
              })
              return false
            }
          }).catch((error) => {
            console.log(error)
            this.$message({
              message: error.message,
              type: 'error'
            })
            return false
          })
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.registerForm.username = ''
      this.registerForm.password = ''
      this.registerForm.confirmPassword = ''
      this.registerForm.email = ''
      this.registerForm.phone = ''
    }
  }
}
</script>

<style lang="less" scoped>
#registerBox {
  width: 900px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  animation: 'bounceInRight' 0.5s;
}

/deep/ .el-form-item__content {
  margin-left: 0!important;
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

/deep/ .el-input__inner {
  border-width: 0 0 2px 0;
  border-radius: 0;
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
</style>
