<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- #ifdef H5 -->
		H5登录界面，不作，不用于H5
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
			<!-- 微信小程序专用登录 -->
			<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>
			<text space="emsp" decode>\n</text>
			<view></view>
			<view>
				<navigator url="../index/index" open-type="switchTab">
					<button type="warn">不登录，回主页</button>
				</navigator>
			</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>

			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="number" 
						v-model="phoneData.no"
						placeholder="请输入手机号码"
						maxlength="11"
					/>
					<button type="primary" size="mini" @click="sendcode" :loading=loading class="codebtn">发送验证码</button>					
				</view>
				<view class="input-item">
					<text class="tit">手机验证码</text>
					<input 
						type="number" 
						v-model="phoneData.code"
						placeholder="请输入手机验证码"
						placeholder-class="input-empty"
						maxlength="6"
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="confirm" :disabled="logining">手机验证码登录</button>
<!-- 			<view class="forget-section">
				忘记密码?
			</view> -->
		
		<button class="wxbtn" type="primary" @click="appwxlogin">微信一键登录</button>
				
		</view>
<!-- 		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view> -->
		<!-- #endif -->
		
	</view>
</template>

<script>
	var _self,pageOptions,session_key,openid;;
	import md5 from '@/md5.js';
	// import {  
 //        mapMutations  
 //    } from 'vuex';
	
	export default{
		data(){
			return {
				phoneData :{
					no: '',
					code: '',
				},
				logining: false,
				pageOptions:[],
				loading:false,
			}
		},
		onLoad:function(option){
			_self = this;
			pageOptions = option; //backpage='../cart/card',backtype=1 |  2
			//微信小程序登录onload
			// #ifdef MP-WEIXIN
			//调用 微信 login 获取code
			uni.login({
				success:function(res){
					//console.log(res); //{errMsg: "login:ok", code: "091kZqto1s2Ysk06yoso1lGxto1kZqtg"}
					//用code换token用后端接口返回session_key和openid
					// async getSwipers(){
					// 	const res = await this.$apiRequest({
					// 		url:'getlunbo'
					// 	});
					
					uni.request({
						url: _self.apiServer + 'code2session',
						method: 'GET',
						header: {
							'Accept' : 'application/json',
							'Content-Type' : 'application/json',
						},					
						data: {
							code : res.code
						},
						success: res1 => {
							//console.log('code结果：'+JSON.stringify(res1)); 
							//{"session_key":"+\/JeA0v2CaxfehB0k1w0hw==","openid":"oYGbn5aYoV6SX1m_om7nsJTHEB5Q"}  
							session_key = res1.data.session_key;
							openid = res1.data.openid;
							//console.log('取得'+session_key);
						}
					});
				}
			})
			// #endif
		},
		methods: {
			//APP微信登录			
			appwxlogin:function(){
				uni.login({
					success: (res) => {
						uni.getUserInfo({
							success: (info) => {
								//后端交互
								//console.log('APP的login客户信息:'+JSON.stringify(info));
								uni.request({
									url: _self.apiServer + 'appwxlogin',
									method: 'POST',
									header: {'Content-Type':'application/json','Accept':'application/json'},
									data: {
										unionId : info.userInfo.unionId,
										nickName : info.userInfo.nickName,
										avatarUrl : info.userInfo.avatarUrl,
										country : info.userInfo.country,
										province : info.userInfo.province,
										city : info.userInfo.city,
										gender : info.userInfo.gender,
									},
									success: res => {
										console.log(res);
										uni.setStorageSync('SUID',res.data.SUID);
										uni.setStorageSync('SRAND',res.data.SRAND);
										uni.setStorageSync('SNAME',res.data.SNAME);
										uni.setStorageSync('SFACE',res.data.SFACE);
										//跳转
										if(pageOptions.backtype ==1 ) {  //如果是1就跳转到tabBar页面
											uni.switchTab({url:pageOptions.backpage});
										} else {
											uni.redirecTo({url:pageOptions.backpage});
										}
									}
								});
							
							},
							fail() {
								uni.showToast({	title:"微信登录授权失败"	});
							}
						})
					},
					fail() {
						uni.showToast({	title:"微信登录授权失败"	});
					}
				});
			},
			//WX小程序登录用
			getUserInfo : function(info) {
						info = info.mp.detail;
						//console.log('info:'+JSON.stringify(info));
						// {"errMsg": "getUserInfo:ok",
						// 	"rawData": "{}",
						// 	"signature": "0beb9695bc2b334126a56980a254fe133be7bdb7",
						// 	"encryptedData": "6buW7hhaXNSAsLGEU7ko9SM5CRmgIwU4to8bqtOdfiqXHQiGS6c=",
						// 	"iv": "JYsGO78OAstJ0LqlsxjXMw==",
						// 	"userInfo": {},
						// 	}
						uni.request({
							url: _self.apiServer + 'mpwxlogin', //MP小程序-微信登录
							method: 'POST',
							header: {
								'Accept' : 'application/json',
								'Content-Type' : 'application/json',
							},
							data: {
								sessionKey : session_key,
								iv : info.iv,
								encryptedData : info.encryptedData
							},
							success: res => {
								if(res.statusCode != 200) {
									console.log(res);
									return false;
								}
								//console.log('反回数据：'+JSON.stringify(res));
								 //写到本地
								uni.setStorageSync('SUID',res.data.SUID);
								uni.setStorageSync('SRAND',res.data.SRAND);
								uni.setStorageSync('SNAME',res.data.SNAME);
								uni.setStorageSync('SFACE',res.data.SFACE);
								//跳转
								if(pageOptions.backtype ==1 ) { 
									uni.switchTab({url:pageOptions.backpage});
								} else {
									uni.redirectTo({
										
									})({url:pageOptions.backpage});
								}
							}
						});
					},
			//提交手机和验证码
		//手机验证码登录
			async confirm(){
				let phone = this.phoneData;
				if(!phone.code){
					this.$api.msg('请填写手机验证码');
					return;
				};
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(phone.no)){
					this.$api.msg('请输入正确的手机号码');
					return;
				};
				let code =  await _self.$apiRequest({
					url:'appcodelogin',
					data:{
						phoneno:phone.no,
						phonecode:phone.code
					}
				});
				//console.log('验证码返回',code);
				if(code.statusCode == 200) { 
					//写到本地
					uni.setStorageSync('SUID',code.data.SUID);
					uni.setStorageSync('SRAND',code.data.SRAND);
					uni.setStorageSync('SNAME',code.data.SNAME);
					uni.setStorageSync('SFACE',code.data.SFACE);
					//跳转
					if(pageOptions.backtype ==1 ) { 
						uni.switchTab({url:pageOptions.backpage});
					} else {
						uni.redirectTo({url:pageOptions.backpage});
					}
					//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
					//this.$api.prePage().refreshList(data, this.manageType);
					//this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
					// setTimeout(()=>{
					// 	uni.navigateBack()
					// }, 800)
					} else	{
						_self.$api.msg(code.data.message);
					}
			},
			//获取手机验证码
			async sendcode(){
				_self.loading = true;
				let phone = this.phoneData
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(phone.no)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				let token = md5(phone.no+'deng');
				//this.$api.msg(mym);  
				//请求验证码 _self.$apiRequest
				let code =  await _self.$apiRequest({
					url:'sendsms',
					data:{
						phoneno:phone.no,
						token:token
					}
				});
				if (code.data.status) {
					_self.loading = false;
					_self.$api.msg(code.data.message);
				}
				console.log('验证码返回',code);
			},					
			// ...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			toRegist(){
				this.$api.msg('去注册');
			},
			async toLogin(){
				this.logining = true;
				const {mobile, password} = this;
				/* 数据验证模块
				if(!this.$api.match({
					mobile,
					password
				})){
					this.logining = false;
					return;
				}
				*/
				const sendData = {
					mobile,
					password
				};
				const result = await this.$api.json('userInfo');
				if(result.status === 1){
					this.login(result.data);
                    uni.navigateBack();  
				}else{
					this.$api.msg(result.msg);
					this.logining = false;
				}
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
	.wxbtn{
		width: 530upx;
		border-radius: 50px;
		margin-top: 120upx;
		&:after{
			border-radius: 100px;
		}
	}
	.codebtn{
		width: 260upx;
		margin-left: 300upx;
		margin-top: -100upx;
	}
</style>
