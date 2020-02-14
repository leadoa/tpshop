const BASE_URL ='https://oalead.cn/api/'

export const apiRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			header: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json; charset=utf-8',
				'Authorization' : 'Bearer '+uni.getStorageSync('SRAND'),
			},
			url:BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.status == 0) {
					return uni.showToast({	title:'获取数据失败'	})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({	title:'请求接口失败'	})
				reject(err)
			}
		})
		//完成uni
	})
}