<template>
	<view class="my">
		<view class="myBg">
			<view class="myTop">
				<view class="myTopImg">
					<image src="../../static/wxtx.jpg" mode="aspectFill"></image>
				</view>
				<view class="myTopRight">
					<view v-if="info.username">
						<view style="height: 35px;" class="font-weight-light">{{info.username}}</view>
						<view style="font-size: 12px;">暂无更多描述</view>
					</view>
					<view v-else>
						<view class="font-weight-light" @click="addLogin">立即登录</view>
						<view style="font-size: 12px;">登录解锁更多功能</view>
					</view>
				</view>
			</view>
			<view class="myBottom">
				<view v-for="(item,index) in icons" :key="index" @click="goToUser(item.name)">
					<view>
						<image class="myBottomimg" :src="item.src"></image>
					</view>
					<view class="font-weight-lighter"> {{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="myLin">
			<view class="myLin-item" v-for="(item,index) in iconsLin">
				<view class="flex align-center " style="width: 150px;height: 45px;">
					<image class="myLin-item-img" :src="item.src"></image>
					<text style="padding-left: 10px;" class="font-weight-lighter">{{item.name}}</text>
				</view>
				<view>
					<image class="myLin-item-img" src="/static/icons/右箭头.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icons: [{
						src: "/static/icons/dd.png",
						name: "订单"
					},
					{
						src: "/static/icons/xx.png",
						name: "消息"
					},
					{
						src: "/static/icons/sc.png",
						name: "收藏"
					},
					{
						src: "/static/icons/zx.png",
						name: "在学"
					}
				],
				iconsLin: [{
						src: "/static/icons/yyj.png",
						name: "我的优惠卷"
					},
					{
						src: "/static/icons/wt.png",
						name: "常见问题"
					}, {
						src: "/static/icons/sz.png",
						name: "设置"
					}
				]
			}
		},
		computed: {
			info() {
				return this.$store.state.user
			}
		},
		methods: {
			goToUser(name) {
				const user = this.$store.state.user
				if (name == "在学") {
					uni.switchTab({
						url: '/pages/learn/learn'
					});
				} else if (user.username) {
					uni.navigateTo({
						url: '/pages/my/my'
					});
					uni.showToast({
						title: "您已登录",
						icon: "none",
						duration: 3000
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			},
			onNavigationBarButtonTap() {

			},
			addLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			}
		}
	}
</script>

<style scoped>
	.myBg {
		width: 100%;
		height: 180px;
		background-color: #5ccc84;
		border-bottom-left-radius: 60px;
		border-bottom-right-radius: 60px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}

	.myTop {
		width: 90%;
		height: 80px;
		display: flex;
		align-items: center;
	}

	.myTopImg {
		width: 60px;
		height: 60px;
		background-color: white;
		border-radius: 50%;
	}

	.myTopImg image {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}

	.myTopRight {
		width: 60%;
		height: 60px;
		padding-left: 20px;
		color: white;
	}

	.myBottom {
		width: 90%;
		height: 72px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 10px;
		box-shadow: 0px 1px 6px rgb(0 0 0 / 10%);
		font-size: 12px;
		text-align: center;
	}

	.myBottomimg {
		width: 30px;
		height: 30px;
	}

	.myLin {
		width: 100%;
		height: 150px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		font-size: 14px;
	}

	.myLin-item {
		width: 87%;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba(0, 0, 0, .1);
	}

	.myLin-item-img {
		width: 25px;
		height: 25px;
	}
</style>
