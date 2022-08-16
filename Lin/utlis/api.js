import {
	http
} from './request'

export const index = () => http('/index') //获取首页数据

export const coupon = () => http('/coupon') // 获取优惠卷数据

export const group = () => http('/group', "GET", {
	usable: 1
}) //拼团列表
