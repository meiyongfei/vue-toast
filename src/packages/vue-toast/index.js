import vueToast from './main.vue'

vueToast.install = function (Vue) {
  Vue.component(vueToast.name, vueToast)
}

export default vueToast
