<template>
  <div>
    <p v-mu-loading.fullscreen="loadingFullscreen">
      <span @click="fullScreen">全屏loading</span>
    </p>
    <p>
      <span @click="part">局部loading</span>
    </p>
    <p v-mu-loading="loading">
      <pre>
        这一生我和你说过爱
        直到今天情未了
        哪怕岁月淡忘了春天
        花香还在你怀抱
        用心呵护每一秒
        爱的世界不会老
        红颜人间白发情
        转眼人生阅尽悲欢
        就算我们总是聚多离少
        依然有哭有笑
        红颜已褪白发飘
        这一生还是你最好
        幸福让我们搀扶到老
        谁也改变不了
        这一生我和你说过爱
        从年轻一直到老
        哪怕风雨吹皱了眼角
        也不让爱情哭了
      </pre>
    </p>
  </div>
</template>

<script>
  import { Loading } from '@/index'
  export default {
    data () {
      return {
        loading: false,
        loadingFullscreen: false
      }
    },
    methods: {
      fullScreen () {
        this.loadingFullscreen = true
        setTimeout(() => {
          this.loadingFullscreen = false
        }, 3000)
      },
      part () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
      }
    }
  }
</script>

