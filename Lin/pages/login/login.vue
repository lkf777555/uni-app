<template>
	<view class="login">
		<view class="loginTop"></view>
		<view class="loginUser">
			<view class="loginContent">
				<view class="loginUserName">
					<i-user :user="user" :user1="user1" :flag="flag" @login="login"></i-user>
				</view>
				<view class="loginRegister">
					<view style="color: #5cd6cf;" @click="Sgin">{{flag?'去注册':'去登录'}}</view>
					<view>忘记密码？</view>
				</view>
				<view class="flex align-center justify-center">
					<view class="login-icons flex align-center justify-center">
						<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
					</view>
				</view>
				<view>
					<checkbox-group @change="handleCheckboxStatus" class="loginLi">
						<checkbox :checked="check" color="#7fd49e" style="transform: scale(0.7);" />
						<view class="font">已阅读并同意用户协议&隐私声明</view>
					</checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		login,
		reg
	} from '../../utlis/api.js'
	export default {
		data() {
			return {
				check: false,
				flag: true,
				fromData: {},
				user: [{
						name: 'username',
						placeholder: "请输入用户",
						type: 'text',
						icon: 'person'
					},
					{
						name: 'password',
						placeholder: "请输入密码",
						type: 'password',
						icon: "locked"
					},
				],
				user1: [{
						name: 'username',
						placeholder: "请输入用户",
						type: 'text',
						icon: 'person'
					},
					{
						name: 'password',
						placeholder: "请输入密码",
						type: 'password',
						icon: "locked"
					},
					{
						name: 'repassword',
						placeholder: "请输入确认密码",
						type: 'password',
						icon: "locked"
					}
				]
			}
		},
		methods: {
			onNavigationBarButtonTap() {

			},
			// 取反
			Sgin() {
				this.flag = !this.flag
			},
			// 点击登录判断是true还是false
			async login(e) {
				this.fromData = e
				await this.flag === true ? this.getLogin() : this.getReg()
			},
			// 登录
			async getLogin() {
				if (!this.check) {
					return uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						icon: "none"
					})
				}
				try {
					const res = await login(this.fromData)
					this.$store.dispatch('setUser', res)
					if (res == "该用户不存在") {
						uni.showToast({
							title: "该用户不存在",
							icon: "none"
						})
					} else {
						uni.showToast({
							title: "登录成功",
							icon: "none"
						})
						this.handleToBindPhonePage()
						uni.switchTab({
							url: "/pages/index/index"
						})
					}
					this.clearFrom()
				} catch (e) {
					console.log(e);
				}
			},
			// 注册
			async getReg() {
				try {
					const res = await reg(this.fromData)
					this.clearFrom()
				} catch (e) {
					console.log(e);
				}
			},
			// 清空表单
			clearFrom() {
				this.fromData.username = "",
					this.fromData.password = "",
					!this.flag ? this.fromData.repassword = "" : ''
			},
			/**
			 * 获取checkbox状态
			 */
			handleCheckboxStatus(event) {
				this.check = Boolean(event.detail.value.length)
			},
			/**
			 * 如果用户登录之后,没有绑定手机号,则跳转到绑定手机号的页面
			 */
			handleToBindPhonePage() {
				const user = this.$store.state.user
				if (!user.phone) {
					// 跳转到绑定手机号的页面
					setTimeout(() => {
						uni.redirectTo({
							url: "/pages/bind-phone/bind-phone"
						})
					}, 350)
					return
				}
			},
		},
	}
</script>

<style scoped>
	.loginRegister {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
	}

	.loginTop {
		width: 100%;
		height: 80px;
		background-color: #42f8b7;
	}

	.loginUser {
		width: 100%;
		height: 460px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-top: -20px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loginContent {
		width: 85%;
		height: 460px;
	}

	.loginUserName {
		width: 100%;
		margin-top: 30px;
	}

	.login-icons {
		width: 50px;
		height: 50px;
		border: 1px solid #5ccc84;
		border-radius: 50%;
	}

	.loginLi {
		margin-top: 20px;
		width: 100%;
		height: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
