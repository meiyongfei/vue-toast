import Vue from 'vue'
import App from './App.vue'
import vueToast from '../packages/index'

Vue.use(vueToast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
