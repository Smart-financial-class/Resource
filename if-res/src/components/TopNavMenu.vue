<template>
  <div id="topMenu">
    <div class="elementBox">
      <img src="@/assets/menu.png" alt="login" class="topElement" />
    </div>
    <div class="titleTxt">
      <transition-group name="title">
        <span class="titleTxt title-item" v-for="title in titleList" v-bind:key="title">
          {{ title }}
        </span>
      </transition-group>
    </div>
    <div class="elementBox">
      <img
        src="@/assets/login.png"
        alt="login"
        class="topElement"
        @click="showLogin"
      />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
// import { TweenMax } from 'gsap'

export default {
  name: 'TopNavMenu',
  data () {
    return {
      activeIndex: '1',
      scrollStatus: 1,
      titleList: ['iF', '-Resource', '.']
    }
  },
  components: {
    Login
  },
  methods: {
    showLogin () {
      this.$parent.showLogin()
    },
    handleMouseWheel (event) {
      if (event.deltaY > 0) {
        this.scrollStatus = 0
      } else {
        this.scrollStatus = 1
      }
      this.changeTitle()
    },
    removeRes () {
      // this.titleList = ['iF']
      this.titleList = ['iF', '.']
    },
    addRes () {
      this.titleList = ['iF', '-Resource', '.']
    },
    changeTitle () {
      if (this.scrollStatus === 0) {
        this.removeRes()
      } else {
        this.addRes()
      }
    }
  }
}
</script>

<style scoped lang='less'>
@height: 60px;
@borderWidth: @height*0.8;

#topMenu {
  position: fixed;
  z-index: 9;
  height: @height;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(241, 241, 241);
  .elementBox {
    height: 80%;
    width: @borderWidth;
    margin: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .topElement {
      height: 60%;
    }
    &:hover {
      border-radius: 50%;
      background-color: rgb(219, 219, 219);
    }
  }
  .titleTxt {
    font-family: 'iF-Font';
    font-size: 28px;
  }
}

.title-item {
  transition: all 0.5s;
  display: inline-block;
}
.title-enter, .title-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.title-leave-active {
  position: absolute;
}
</style>
