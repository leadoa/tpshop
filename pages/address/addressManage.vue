<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">收货人</text>
			<input class="input" type="text" v-model="addressData.consignee" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<input class="input" type="input" v-model="addressData.address_name" placeholder="地址区域,可输入,可右边地图选取" />
			<text class="yticon icon-shouhuodizhi" @click="chooseLocation"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.address" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.use" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>
		<button class="add-btn" type="primary" @click="deleteAddress">删除</button>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				addressData: {
					address_id : 0,
					consignee: '',
					mobile: '',
					address_name: '在地图选择',
					address: '',
					use: false
				},
				manageType : ''  ,//add或edit
			}
		},
		onLoad(option){
			_self = this;
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				
				this.addressData = JSON.parse(option.data)
				//console.log('取得的地址信息“',this.addressData);
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				_self.addressData.use = e.target.value;
				//console.log(e.target.value);
			},
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.address_name = data.address;
						//console.log('地图返回',data);
						//this.addressData.address = data.name;
					}
				})
			},
			
			//提交
			async confirm(){
				let data = this.addressData;
				if(!data.consignee){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.address_name){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.address){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				//新数据提交服务
				if (_self.manageType === 'edit') {
					let res = await _self.$apiRequest({
						method: 'PUT',
						url:'addresses/'+data.address_id,
						data: data
					});
					//console.log(res);
				} else {
					let res = await _self.$apiRequest({
						method: 'POST',
						url:'addresses',
						data: data
					});
					//console.log(res);
				}
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				//_self.$api.msg(data);
				 this.$api.prePage().refreshList(data, this.manageType);
				 this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				 setTimeout(()=>{
				 	uni.navigateBack()
				 }, 800)
			},
			async delA(){
				let delRes = await _self.$apiRequest({
					method:'DELETE',
					url:'addresses/'+_self.addressData.address_id
				});
				//console.log(delRes);
				if (delRes.data.success){
					uni.navigateBack({delta: 1});
				} else {
					_self.$api.msg(delRes.data.message);
				}
			},
			deleteAddress() {
				uni.showModal({
					title:'你确定要删除这个地址吗？',
					success: (res) => {
						 if(res.confirm) {
							_self.delA();
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
	.del-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(2, 31, 219, 102);		
	}
</style>
