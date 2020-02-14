<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="(item,index) in flist" :key="index" class="f-item b-b" :class="{active: index === currentId}" @click="tabtap(item,index)">
				{{item.cat_name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view v-for="(item1,index) in flist" :key="item1.cat_id" class="s-list" :id="'main-'+item1.cat_id"  @tap="navToList(item1.cat_id)">
				<text class="s-item" :class="{sitemred: index === currentId}">{{item1.cat_name}}</text>
				<view class="t-list">
					<view @tap.stop="navToList(item2.cat_id)"
					 v-for="item2 in tlist" :key="item2.cat_id" 
					 v-if="item2.parent_id === item1.cat_id" class="t-item" 
					 >
						<image :src="item2.thumb"></image>
						<text>{{item2.cat_name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 0,
				flist: [],
				slist: [],
				tlist: [],
				tmpArrNo0: [],
			}
		},
		onLoad(){
			_self = this;
			_self.loadData();
		},
		onShow() {
			// if(!this.sizeCalcState){
			// 	this.calcSize();
			// }
		},
		methods: {
			async loadData(){
				let list = await _self.$apiRequest({
					url: 'cats'
				});
				list = list.data.data;
				list.forEach(item=>{
					if (item.parent_id ==0) {
						_self.flist.push(item);
					} else {
						_self.tmpArrNo0.push(item); //除了一级外的其他级
					}
				});
				
				_self.flist.forEach(fitem =>{
					_self.tmpArrNo0.forEach(item=>{
						if(item.parent_id == fitem.cat_id ){
							_self.slist.push(item);  //2级分类
						} else {
							_self.tlist.push(item);  //除了一级和二级的分类，也就是3组分类
						}
					});
				});
				_self.tlist = [...new Set(_self.tlist)];
				//console.log(_self.tlist);
			},
			//一级分类点击
			tabtap(item,index){
				if(!_self.sizeCalcState){
					_self.calcSize();
				}
				_self.currentId = index;				
				setTimeout(()=>{
					_self.tabScrollTop = _self.flist[index].top;  //设置竖向滚动条位置
					//console.log(this.flist[index].top);
				}, 500)
			},
			//右侧栏滚动，滚动时觖发
			asideScroll(e){
				// if(!_self.sizeCalcState){
				// 	_self.calcSize(); 
				// }
				// let scrollTop = e.detail.scrollTop; //取得位置
				// //console.log('位置',scrollTop);
				// let tabs = _self.flist.filter(item=>item.top <= scrollTop).reverse();
				// //console.log(tabs);
				// if(tabs.length > 0){
				// 	_self.currentId = tabs.length-1;
				// }
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				_self.flist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.cat_id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				});
				_self.sizeCalcState = true;
			},
			navToList(cat_id){
				uni.navigateTo({
					url: `/pages/product/list?cat_id=${cat_id}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: $font-color-base;
		position: relative;
		&.active{
			color: $base-color;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				background-color: $base-color;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.sitemred{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: #4399FC;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		
		image{
			width: 140upx;
			height: 140upx;
		}
	}
	.active2 {
		color: #FF0000;
	}
</style>
