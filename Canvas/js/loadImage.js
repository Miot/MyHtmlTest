function loadImage(imgUrl,fn){
		//1.遍历imgUrl 动态创建img对象
		//2.在加载图片的过程中 需要监听每一张img的onload事件 当所有onload完毕 调用回调 把加载完毕的资源传递过去

		//存储图像资源
		var imgObj = [];
		var tempImg;
		//记录已经加载完毕的url数量
		var loaded = 0;
		//记录需要加载完毕的url数量
		var imgLength  = 0;
		//遍历所有的url
		for(var key in imgUrl){
			imgLength ++;
			tempImg = new Image();
			tempImg.onload = function(){
				loaded++;
				if(loaded >= imgLength){
					fn(imgObj);
				}
			}
			tempImg.src = imgUrl[ key ];
			imgObj[ key ] = tempImg;
		}
	}