<template>
	<div class="toast" v-if="type !== '6'" :class="{waring: types === 'waring'}">
		<div class="left">
			<img src="../assets/warning.png" alt="" v-if="types === 'waring'" />
			<img src="../assets/tips.png" alt="" v-else />
		</div>
		<div class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
		<div class="detail" v-if="detail">详情</div>
		<div class="right" v-if="right">
			<img src="../assets/warning.png" alt="" v-if="types === 'waring'" />
			<img src="../assets/tips.png" alt="" v-else />
		</div>
	</div>
	<div v-else class="toast-img">
		<img :src="imgsrc" alt="" class="poster" />
	</div>
</template>
<script>
export default {
    name: 'vue-toast',
	data() {
		return {};
	},
	props: {
		type: {
			type: String,
			required: true
		},
		imgsrc: {
			type: String,
			required: false
		},
		types: {
			type: String,
			required: false,
			default: "normal"
		},
		detail: {
			type: Boolean,
			default: false
		},
		right: {
			type: Boolean,
			default: false
		}
	}
};
</script>
<style lang="less">
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
}
</style>
