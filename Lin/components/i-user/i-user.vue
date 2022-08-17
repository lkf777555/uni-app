<template>
	<view>
		<view class="font-weight-light loginSign">{{flag?'登录':'注册'}}</view>
		<uni-forms :modelValue="formData">
			<uni-forms-item v-for="(item,index) in userLogin" :key="index">
				<view class="i-user-icons">
					<uni-icons :type="item.icon" size="20"></uni-icons>
					<input class="i-user-input" :type="item.type" v-model="formData[item.name]"
						:placeholder="item.placeholder" />
				</view>
			</uni-forms-item>
		</uni-forms>
		<button class="loginSubForm" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		name: "i-user",
		props: {
			user: Array,
			default: () => [],
			user1: Array,
			default: () => [],
			flag: Boolean,
		},
		data() {
			return {
				formData: {},
			};
		},
		methods: {
			login() {
				console.log(this.formData);
			},
		},
		computed: {
			userLogin() {
				return this.flag ? this.user : this.user1
			}
		}
	}
</script>

<style scoped>
	.i-user-icons {
		width: 100%;
		background-color: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.i-user-input {
		height: 50px;
		width: 80%;
		height: 50px;
		border: none;
		outline: none;
		background-color: #f5f5f5;
	}


	.loginSign {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 22px;
	}

	.loginSubForm {
		width: 100%;
		height: 50px;
		background-color: #5ccc84;
		text-align: center;
		line-height: 50px;
		color: white;
	}
</style>
