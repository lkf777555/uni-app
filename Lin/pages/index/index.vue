<template>
	<view class="container">
		<index-skeleton v-if="!loadingStatus"></index-skeleton>
		<view v-else>
			<!-- 搜索框 -->
			<i-search></i-search>
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
				<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
					<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;"
						class="rounded shadow">
					</image>
				</swiper-item>
			</swiper>
			<!-- 图表分类 -->
			<i-icon :list="iconNav"></i-icon>
			<!-- 优惠卷 -->
			<i-coupon :coupon="coupon"></i-coupon>
			<!-- 拼团 -->
			<i-group :group="group" :list="list" :imgData="imgData"></i-group>
		</view>
	</view>
</template>

<script>
	import indexSkeleton from "@/pages/index/index-skeleton"
	import {
		index,
		coupon,
		group
	} from '../../utlis/api.js'
	export default {
		components: {
			indexSkeleton
		},
		data() {
			return {
				swiper: [], // 轮播图数据
				iconNav: [], // 图标分类数据
				coupon: [], //拼团数据
				group: [],
				list: [],
				imgData: {}, // 底部图片
				loadingStatus: false
			}
		},
		onLoad() {
			this.getRequest()
		},
		onPullDownRefresh() {
			this.getRequest()
		},
		methods: {
			// 数据加载之前的骨架屏
			async getRequest() {
				try {
					await this.getIndex() //首页数据
					await this.getCoupon() // 优惠卷
					await this.gitGroup() // 拼团列表
					this.loadingStatus = true
					uni.stopPullDownRefresh()
				} catch (err) {
					uni.stopPullDownRefresh()
				}

			},
			//首页数据
			async getIndex() {
				await index().then(res => {
					this.swiper = res[1].data
					this.iconNav = res[2].data
					this.list = res[5].data
					this.imgData = res[6]
				})
			},
			// 优惠卷
			async getCoupon() {
				await coupon().then(res => {
					this.coupon = res
				})
			},
			// 拼团列表
			async gitGroup() {
				await group().then(res => {
					this.group = res.rows
				})
			}
		}
	}
</script>

<style>

</style>
