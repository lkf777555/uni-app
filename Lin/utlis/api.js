import {
	http
} from './request'

export const index = () => http('/index') //获取首页数据

export const coupon = () => http('/coupon') // 获取优惠卷数据

export const group = () => http('/group', "GET", {
	usable: 1
}) //拼团列表
export const login = (data) => http('/login', "POST", data) // 登录

export const reg = (data) => http('/reg', "POST", data) // 注册

export const get_captcha = (data, token) => http('/get_captcha', "POST", data, token) // 发送验证码

export const bind_mobile = (data, token) => http('/bind_mobile', "POST", data, token) // 绑定手机号
