<template>
	<view>
		<view class="p-2">
			<view style="width: 100%;height: 30px;padding-left: 10px;"><b>拼团</b></view>
			<scroll-view scroll-x="true" class="scroll-row">
				<view v-for="(item,index) in group" :key="item.id" class="group">
					<view class="group-item">
						<view class="imageItem">
							<image :src="item.cover"></image>
							<view class="imageType">
								{{item.type==="column"?'专栏':''}}
								{{item.type==="media"?'图文':''}}
								{{item.type==="audio"?'音频':''}}
								{{item.type==="video"?'视频':''}}
							</view>
						</view>
						<view class="text-ellipsis">{{item.title}}</view>
						<view>
							<text style="color: red;">￥{{item.price}}</text>
							<text style="padding:15px;color:#b6b2ae;">{{item.t_price}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="p-2">
				<view class="list">
					<b>最新列表</b>
					<view class="text-light-muted font-weight-light font-smaller ">查看更多</view>
				</view>
				<view v-for="(item,index) in list" :key="index">
					<view class="listNav-item">
						<view class="imageItem">
							<image :src="item.cover"></image>
							<view class="imageType" v-if="item.type">
								{{item.type==="column"?'专栏':''}}
								{{item.type==="media"?'图文':''}}
								{{item.type==="audio"?'音频':''}}
								{{item.type==="video"?'视频':''}}
							</view>
						</view>
						<view class="listNav-items">
							<view class="listNav-try" v-html="item.try"></view>
							<view>
								<text style="color: red;">￥{{item.price}}</text>
								<text style="padding:15px;color:#b6b2ae;">{{item.t_price}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="img">
			<image :src="imgData.data" mode="aspectFill" class="imgData"></image>
		</view>
	</view>

</template>

<script>
	export default {
		name: "i-group",
		props: {
			group: Array,
			list: Array,
			imgData: Object
		},
		data() {
			return {

			};
		},
		computed: {
			typeTitle() {
				return
			}
		},
	}
</script>

<style scoped>
	.group {
		display: inline-flex;
	}

	.imageItem {
		width: 170px;
		height: 90px;
		position: relative;
	}

	.imageType {
		position: absolute;
		width: 35px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		background: rgba(0, 0, 0, .4);
		right: 10px;
		bottom: 0px;
		color: white;
	}

	.imageItem image {
		width: 160px;
		height: 90px;
	}

	.group-item {
		width: 170px;
		height: 150px;
	}

	.list {
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.listNav-item {
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
	}

	.listNav-items {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	::v-deep.listNav-try p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.img {
		width: 100%;
		height: 220px;
	}

	.imgData {
		width: 100%;
		height: 100%;
	}
</style>
