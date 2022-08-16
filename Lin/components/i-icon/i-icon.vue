<template>
	<view class="flex flex-wrap align-center py-2">
		<view class="flex flex-column align-center justify-center py-1" style="width: 25%;" v-for="(item,index) in list"
			:key="index">
			<image :src="item.src" mode="aspectFill" style="width: 70rpx;height: 70rpx;" class="rounded shadow">
			</image>
			<text class="font-sm text-muted mt-1">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-icon",
		props: {
			list: Array
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
