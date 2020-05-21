# @cmbi/vue-toast

> 顶部固定toast

## 安装

``` bash
$ npm install @cmbi/vue-toast -S
```
当前委托

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import vueToast from '@cmbi/vue-toast'
Vue.use(vueToast)
```
#字段说明
  msgType：4 普通文本提示
  msgType：5 图片文本提示
  msgContent： 提示文案内容
  noticeBarMode： WRANING 警告提示
  extraButton：More 跳转箭头
  extraButton：CLOSE 关闭图标

#组件
    <vue-toast :toastObj="toastObj" :visable="visable" @closeToast="closeToast"/>