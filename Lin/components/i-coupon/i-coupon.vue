<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view v-for="(item,index) in coupon" :key="item.id" class="coupon">
				<view class="coupon-value">
					<text>￥{{item.price}}</text>
					<text class="font">{{item.value.title}}</text>
				</view>
				<view hover-class="bg-hover-warning" class="warning">
					领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "i-coupon",
		props: {
			coupon: Array
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.coupon {
		width: 660rpx;
		display: inline-flex;
		color: #ffffff;
	}

	.coupon-value {
		width: 230px;
		padding: 20rpx 30rpx;
		background-color: #d39e00;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-right: 4rpx dashed;
	}


	.warning {
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffc107;
		font-size: 30rpx !important;
	}
</style>
