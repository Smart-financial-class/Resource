<template>
  <div id="mainBox" @mousewheel="handleMouseWheel">
    <div id="page1">
      <TopNavMenu ref="top"></TopNavMenu>
      <transition name="loginAnimate">
        <div
          id="loginBox"
          v-if="loginVisibility"
          :style="{ height: style.height }"
          @click="hideLogin"
        >
          <Login></Login>
        </div>
      </transition>
    </div>
    <div id="page2">
      <iframe src="../../static/resources/index.html" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import TopNavMenu from '@/components/TopNavMenu'
import Login from '@/components/Login'

export default {
  name: 'MainPage',
  data () {
    return {
      loginVisibility: 0,
      style: {
        height: document.documentElement.clientHeight + 'px'
      }
    }
  },
  methods: {
    showLogin () {
      this.loginVisibility = 1
    },
    hideLogin (e) {
      if (e.target.getAttribute('id') === 'loginBox') {
        this.loginVisibility = 0
      }
    },
    handleMouseWheel (event) {
      // 调用子组件同名函数，监听鼠标滚轮事件，判断滚动方向
      this.$refs.top.handleMouseWheel(event)
    }
  },
  components: {
    TopNavMenu,
    Login
  },
  mounted () {
    window.onresize = () => {
      this.style.height = document.documentElement.clientHeight + 'px'
    }
  }
}
</script>

<style scoped lang="less">
#loginBox {
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page1 {
  width: 100%;
  height: 1080px;
}

#page2 {
  width: 100%;
  height: 1080px;
}

// 登录页面出现与飞出效果动画
.loginAnimate-enter {
  transform: translateY(-200%);
}

.loginAnimate-enter-active, .loginAnimate-leave-active {
  transition: all 0.8s ease;
}

.loginAnimate-enter-to {
  transform: translateY(0%);
}

.loginAnimate-leave-to {
  transform: translateY(-200%);
}

iframe {
  width: 100%;
  height: 100%;
}

// @keyframes loginAppear {

// }
</style>
