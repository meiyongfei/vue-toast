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
  msgType：NOTICE_BAR_TEXT  普通文本提示
  msgType：NOTICE_BAR_PICTURE 图片文本提示
  msgTitle：提示内容
  msgContent： 提示文案内容（点击提示弹框的详情的内容）
  noticeBarMode： WRANING 警告提示
  extraButton：More 跳转箭头
  extraButton：CLOSE 关闭图标

#事件
    openDetail 点击详情弹出详情弹框
    closeToast 关闭弹框
#组件
    <vue-toast :toastObj="toastObj" :visable="visable" @closeToast="closeToast" @openDetail="openDetail"/>