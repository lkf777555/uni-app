const baseURL = "http://demonuxtapi.dishait.cn/mobile"

export const http = (Url, method = "GET", data, token = "") => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + Url,
			data: data,
			header: {
				'appid': 'bd9d01ecc75dbbaaefce',
				"token": token
			},
			timeout: 5000,
			method: method,
			success: (res) => {
				resolve(res.data.data)
			},
		})
	})
}
