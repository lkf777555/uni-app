<template>
	<view class="bind-phone">
		<view class="bind-phoneTop"></view>
		<view class="bind-phoneTopContent">
			<view class="bind-top">
				<view class="bind-title">绑定手机号</view>
				<view class="bind-form">
					<uni-forms :modelValue="formData">
						<view class="bind-input-item">
							<uni-icons type="person" size="20"></uni-icons>
							<input style="width: 85%;height: 50px;" type="text" v-model="formData.phone"
								placeholder="请输入手机号" />
						</view>
						<view class="bind-input-itemChild">
							<uni-icons style="width: 11%;text-align: center;" type="locked" size="20"></uni-icons>
							<input style="width: 49%;height: 50px;" type="text" v-model="formData.code"
								placeholder="验证码" />
							<button class="bind-input-button" @click="setCode">发送</button>
						</view>
					</uni-forms>
					<button class="bind-button-sub" @click="bind">绑定</button>
					<view v-if="bindCode" class="bind-Code">验证码为{{bindCode}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		get_captcha,
		bind_mobile
	} from '../../utlis/api.js'
	export default {
		data() {
			return {
				formData: {},
				bindCode: ""
			}
		},
		methods: {
			// 点击登录
			async setCode() {
				await this.getCode()
			},
			// 点击绑定
			async bind() {
				await this.Code()
			},
			// 获取验证码接口
			async getCode() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				try {
					const token = uni.getStorageSync("Token")
					const res = await get_captcha(this.formData, token)
					console.log(res);
					if (res !== "手机号不能为空") {
						this.bindCode = res
					}
					uni.showToast({
						title: `验证码为${res}`,
						icon: "none",
						duration: 3000,
					})
				} catch (e) {
					console.log(e);
				} finally {
					uni.hideLoading()
				}
			},
			//	绑定手机号接口
			async Code() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				try {
					const token = uni.getStorageSync("Token")
					console.log(token);
					const res = await bind_mobile(this.formData, token)
					uni.showToast({
						title: "绑定成功",
						icon: "none"
					})
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/my/my'
						})
					}, 350)
				} catch (err) {
					console.log(err)
				} finally {
					uni.hideLoading()
				}
			},
		}
	}
</script>

<style scoped>
	.bind-phoneTop {
		width: 100%;
		height: 80px;
		background-color: #42f8b7;
	}

	.bind-phoneTopContent {
		width: 100%;
		height: 340px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-top: -20px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bind-top {
		width: 80%;
		height: 340px;
		display: flex;
		flex-direction: column;
	}

	.bind-title {
		margin-top: 20px;
		width: 100%;
		height: 50px;
		font-size: 22px;
	}

	.bind-input-item {
		width: 100%;
		height: 50px;
		display: flex;
		background-color: #f5f5f5;
		align-items: center;
		justify-content: space-around;
	}

	.bind-input-itemChild {
		margin-top: 20px;
		width: 100%;
		height: 50px;
		display: flex;
		background-color: #f5f5f5;
		align-items: center;
	}

	.bind-input-button {
		width: 40%;
		height: 49px;
		background-color: #5ccc84;
		color: white;
		line-height: 50px;
	}

	.bind-button-sub {
		margin-top: 40px;
		width: 100%;
		height: 45px;
		background-color: #5ccc84;
		color: white;
		font-size: 18px;
		line-height: 45px;
		font-weight: 200;
	}

	.bind-Code {
		margin-top: 10px;
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
