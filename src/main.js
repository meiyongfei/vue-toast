import Vue from 'vue'
import App from './App.vue'
import vueToast from './lib/index.js'
Vue.use(vueToast)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app', true)
