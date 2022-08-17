<template>
	<view class="login">
		<view class="loginTop"></view>
		<view class="loginUser">
			<view class="loginContent">
				<view class="loginUserName">
					<i-user :user="user" :user1="user1" :flag="flag"></i-user>
				</view>
				<view class="loginRegister">
					<view style="color: #5cd6cf;" @click="Sgin">{{flag?'去登录':'注册账号'}}</view>
					<view>忘记密码？</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
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
			Sgin() {
				this.flag = !this.flag
			}
		}
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
		background-color: #46f4bd;
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
</style>
