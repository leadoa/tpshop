<template>
	<view>
		测试页面
		<view>
			<button type="primary" @click="test">测试</button>
		</view>
		<view class="view-box animated" hover-class="view-box-hover rubberBand"
		 hover-stay-time=800
		>
			<text>标题</text>
		</view>
		<view>
			<image src=""
				mode="aspectFill" 
				lazy-load 
			></image>
		</view>
		<view @tap="phone">拨打电话：13366138017</view>
		<view>
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				flist: [],
				slist: [],
				tlist: [],
				tmpArrNo0: [],
				cartList: [
				],
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/jc.png'
				}]
			}
		},
		onLoad(){
			_self = this;
			//_self.loadData();
		},
		methods: {
			async loadData(){
				let myv = uni.getStorageSync('SNAME');
				_self.$api.msg(myv);
			},
			phone(){
				uni.makePhoneCall({
					 phoneNumber: '13366138017'
				})
			},
			test(){
				let oldCart = uni.getStorageSync('carts');
				if(!oldCart){
					console.log('没有');
					oldCart = _self.cartList;
				}
				
				oldCart = oldCart.concat({
					id: 1,
					image: 'https://oalead.cn/touxiang.jpg',
					attr_val: '春装款 L',
					stock: 15,
					title: 'OVBE 长袖风衣',
					price: 278.00,
					number: 1
				});
				_self.cartList = oldCart;
				uni.setStorageSync('carts',oldCart);
				console.log(_self.cartList);

			}
		}
	}
</script>

<style>
	.view-box{
		width: 200upx;
		height: 200upx;
		background: #007AFF;
		color: #FFFFFF;
		margin: 100upx;
	}
	.view-box-hover {
		background: red;
	}
</style>
