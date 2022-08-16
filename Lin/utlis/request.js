const baseURL = "http://demonuxtapi.dishait.cn/mobile"

export const http = (Url, method = "GET", data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + Url,
			data: data,
			header: {
				'appid': 'bd9d01ecc75dbbaaefce'
			},
			timeout: 5000,
			method: method,
			success: (res) => {
				if (res.data.msg === "ok") {
					uni.showToast({
						title: "数据请求成功",
					})
					resolve(res.data.data)
				} else {
					uni.showToast({
						title: "数据请求失败",
						icon: "none"
					})
				}
			},
		})
	})
}
