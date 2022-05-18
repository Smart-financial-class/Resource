<template>
  <div id="topMenu">
    <div class="elementBox">
      <img src="@/assets/menu.png" alt="login" class="topElement" />
    </div>
    <div class="titleTxt">iF-Resource</div>
    <div class="elementBox">
      <img src="@/assets/login.png" alt="login" class="topElement" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'TopNavMenu',
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {
    Login
  }
}
</script>

<style scoped lang='less'>
@height: 60px;
@borderWidth: @height*0.8;

#topMenu {
  height: @height;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
