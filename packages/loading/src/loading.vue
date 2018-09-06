<template>
  <div class="mu-loading" :style="{'top': top, 'left': left, 'width': width, 'height': height}">
    <div class="bg"></div>
    <div class="mu-container">
      <img src="static/images/loading.gif" alt="..">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mu-loading',
    data () {
      return {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .mu-loading {
    color: pink;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: .7;
      z-index: 999;
    }
    & .mu-container {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
    }
  }
</style>


