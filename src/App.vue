<template>
  <div id="app">
    <div>
    <h1>测试 vueToast 组件</h1>
    <div class="container" ref="wise">
      <vue-toast :toastObj="toastObj" :visable="visable" @closeToast="closeToast"/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      visable: true,
      toastObj: {
        msgType: "5",
        imageUrl: "https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3026049548,2736935058&fm=85&app=92&f=JPEG?w=121&h=75&s=15B87D7F08700082698CF0F503008060"
      }
    }
  },
  methods: {
    closeToast() {
      this.visable = false
    }
  }
}
</script>

<style lang="less">
body, html, h1, div {
  margin: 0;
  padding: 0;
}
</style>
