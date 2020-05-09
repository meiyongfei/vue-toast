<template>
  <div id="app">
    <div>
    <h1>测试 vueToast 组件</h1>
    <div class="container" ref="wise">
      <vue-toast type="1" class="showToast1" />
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
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
body, html, h1, div {
  margin: 0;
  padding: 0;
}
</style>
