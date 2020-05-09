import vueToast from './vue-toast.vue' // 导入组件
vueToast.install = function (Vue) {
    Vue.component(vueToast.name, vueToast) // vueToast.name 组件的name属性
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(vueToast);
    }
}
export default vueToast // 导出..