<template>
	<div class="toast-wrap" v-show="visable">
		<div class="toast" v-if="toastObj.msgType === 'NOTICE_BAR_TEXT'" :class="{waring: toastObj.noticeBarMode === 'WARNING'}">
			<div class="left">
				<img src="../../assets/warning.png" alt="" v-if="toastObj.noticeBarMode === 'WARNING'" />
				<img src="../../assets/tips.png" alt="" v-else />
			</div>
			<div class="title">{{ toastObj.msgTitle }}</div>
			<div class="detail" v-if="toastObj.msgContent.trim().length > 1" @click="openDetail(toastObj.msgContent)">详情</div>
			<div class="right" v-if="toastObj.extraButton === 'CLOSE' || toastObj.extraButton === 'MORE'">
				<img src="../../assets/close.png" alt="" v-if="toastObj.extraButton === 'CLOSE'" @click="closeToast" />
				<img src="../../assets/next.png" alt="" v-else-if="toastObj.extraButton === 'MORE'" @click="goMore(toastObj.zyAppUrl)" />
			</div>
		</div>
		<div v-else-if="toastObj.msgType === 'NOTICE_BAR_PICTURE'" class="toast-img">
			<img src="../../assets/clone-dark.png" alt="" class="closed" @click="closeToast">
			<img :src="toastObj.imageUrl" alt="" class="poster" @click="goMore(toastObj.zyAppUrl)" />
		</div>
		<div class="vue-dialogwrap" v-if="showDetail">
			<div class="vue-mark"></div>
			<div class="vue-dialog">
				<div class="vue-dialog-header">详情</div>
				<div class="content">
					<p class="vue-p">{{toastObj.msgContent}}</p>
				</div>
				<div class="vue-footer vue-hairline--top">
					<button @click="showDetail = false"><span>我知道了</span></button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'vue-toast',
  data() {
    return {
		showDetail: false
	};
  },
  props: {
    toastObj: {
      type: Object,
      required: true
	},
	visable: {
		type: Boolean,
		default: false
	}
  },
  methods: {
	  closeToast() {
		  this.$emit('update:visable', false)
	  },
	  openDetail(data) {
		  this.showDetail = true
	  },
	  goMore(data) {
		  console.log(data, 111111)
		  this.$emit('goMore', data)
	  }
  }
};
</script>
<style lang="less">
/* eslint-disable */
.toast-wrap{
	width: 100%;
	position: relative;
}
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
			margin-bottom: -3px;
		}
	}
	.title {
		flex: 1;
	}
	.detail {
		width: 26px;
		padding: 0 0 0 17px;
		box-sizing: content-box;
	}
	.right {
		width: 10px;
		padding-left: 17px;
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
.vue-dialogwrap{
	.vue-mark {
		z-index: 2002;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.7);
	}
	.vue-dialog{
		z-index: 2003;
		position: fixed;
		top: 45%;
		left: 50%;
		width: 303px;
		overflow: hidden;
		font-size:16px;
		background-color: #fff;
		border-radius: 3px;
		-webkit-transform: translate3d(-50%,-50%,0);
		transform: translate3d(-50%,-50%,0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transition: .3s;
		transition: .3s;
		-webkit-transition-property: opacity,-webkit-transform;
		transition-property: transform,opacity;
		transition-property: transform,opacity,-webkit-transform;
		.content{
			padding: 12px 30px 26px 30px;
			color: #818999;
			font-size: 14px;
			line-height: 22px;
		}
		.vue-footer{
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			justify-content: center;
			&.vue-hairline--top{
				position: relative;
				&::after{
					position: absolute;
					content: ' ';
					height: 1px;
					width: 100%;
					background: #ebedf0;
					pointer-events: none;
					-webkit-transform: scaleY(.5);
					transform: scaleY(.5);
				}
			}
			button {
				background: #fff;
				border: none;
				outline: none;
				height: 48px;
				line-height: 48px;
				font-size:16px;
				color: #3D7EFF;
			}
		}
	}
	.vue-dialog-header{
		font-size: 18px;
		line-height: 18px;
		color: #2b3447;
		font-weight: 400 !important;
		padding-top: 24px;
		text-align: center;
	}
}
</style>
