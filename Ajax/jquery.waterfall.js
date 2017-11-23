// 添加瀑布流布局插件
$.fn.extend({
	waterfall:function(){
		//父盒子宽度
		var totalWidth = this.width();
		//子元素宽度
		var itemWidth = this.children('.item').width();
		//每一行的个数
		var colNum = Math.floor(totalWidth/itemWidth);
		//元素之间间距
		var margin = (totalWidth - itemWidth*colNum)/(colNum-1);
		//高度数组
		var heightArr = [];
		//设定高度数组赋值初始值
		for(var i=0;i<colNum;i++){
			heightArr[i] = 0;
		}
		this.children('.item').each(function(index,element){
			//获取当前循环的子元素高度
			var currentHeight = $(element).height();
			//计算该元素放在哪个位置
			//先假设索引为0的是最小值
			var minIndex = 0;
			var minHeight = heightArr[0];
			for(var i=0;i<heightArr.length;i++){
				//进行比较
				if(heightArr[i]<minHeight){
					minHeight = heightArr[i];
					minIndex = i;
				}
			}
			//循环完毕 获得最小的高度以及最小的索引值
			//设置给当前循环的子元素
			$(element).css({
				top:minHeight,
				left:minIndex*(itemWidth+margin)
			});
			//修改索引值 以便下一次循环的进行
			minHeight += currentHeight;
			minHeight += margin;
			//赋值给高度数组
			heightArr[minIndex]=minHeight;
		});
		//获取高度数组中最大的值并修改父盒子的高度
		var maxHeight = heightArr[0];
		for(var i=0;i<heightArr.length;i++){
			if(heightArr[i]>maxHeight){
				maxHeight = heightArr[i];
			}
		}
		this.height(maxHeight);
	}
})