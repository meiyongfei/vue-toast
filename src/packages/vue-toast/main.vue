<template>
	<div class="toast-wrap" v-show="visable">
		<div class="toast" v-if="toastObj.msgType === '4'" :class="{waring: toastObj.noticeBarMode === 'WARNING'}">
			<div class="left">
				<img src="../../assets/warning.png" alt="" v-if="toastObj.noticeBarMode === 'WARNING'" />
				<img src="../../assets/tips.png" alt="" v-else />
			</div>
			<div class="title">{{ toastObj.msgContent }}</div>
			<div class="detail" v-if="detail">详情</div>
			<div class="right" v-if="toastObj.extraButton === ' CLOSE' || toastObj.extraButton === ' MORE'">
				<img src="../../assets/close.png" alt="" v-if="toastObj.extraButton === ' CLOSE'" />
				<img src="../../assets/next.png" alt="" v-else-if="toastObj.extraButton === ' MORE'" />
			</div>
		</div>
		<div v-else-if="toastObj.msgType === '5'" class="toast-img">
			<img src="../../assets/clone-dark.png" alt="" class="closed" @click="closeToast">
			<img :src="toastObj.imageUrl" alt="" class="poster" />
		</div>
	</div>
</template>
<script>
export default {
  name: 'vue-toast',
  data() {
    return {};
  },
  props: {
    toastObj: {
      type: Object,
      required: true
	},
	visable: {
		type: Boolean,
		default: false
	},
    detail: {
      type: Boolean,
      default: false
    }
  },
  methods: {
	  closeToast() {
		  this.$emit('closeToast')
	  }
  }
};
</script>
<style lang="less">
/* eslint-disable */
.toast {
width: 100%;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 13px 8px 16px;
line-height: 17px;
font-size: 13px;
background: #f0f5ff;
color: #3d7eff;
box-sizing: border-box;
	&.waring {
		background: #ffe7e6;
	}
	.left {
		padding-right: 6px;
		img {
			width: 16px;
		}
	}
	.title {
		flex: 1;
	}
	.detail {
		width: 26px;
		padding: 0 17px;
		box-sizing: content-box;
	}
	.right {
		width: 10px;
		img {
			width: 10px;
		}
	}
}
.toast-img {
	position: relative;
	width: 100%;
	.poster {
		width: 100%;
		display: block;
	}
	.closed{
		position: absolute;
		right: 13px;
		top:13px;
		width: 8px;
	}
}
</style>
