(function(w){
		var version = '1.0.0';

		// 工厂
		function jQuery( selector ){
			return new jQuery.fn.init( selector );
		};
		// 替换原型 + 原型简称
		jQuery.fn = jQuery.prototype = {
			constructor: jQuery,
			jquery: version,
			selector:'',
			length:0,
			toArray:function(){
				return [].slice.call(this);
			},
			get:function( i ){
				// 如果传入null或undefined，那么转化为数组返回
				// 否则
					// 如果传入的是正数，按照指定的下标获取元素返回
					// 如果传入的是负数，按照下标倒着获取元素返回(this.length+负数)
				return i == null ? this.toArray() : (i>= 0 ? this[ i ] : this[ this.length + i ]);
			},
			eq:function( i ){
				// 如果传入null或undefined，返回一个新实例
				// 如果传入的是正数，按照指定的下标获取元素，再包装成新实例返回
				// 如果传入的是负数，按照下标倒着获取元素返回(this.length+负数)，再包装成新实例返回
				return i == null? jQuery() : jQuery( this.get( i ) );
			},
			each:function( fn ){
				//复用静态方法
				return jQuery.each( this,fn );
			},
			map:function( fn ){
				//复用静态方法
				return jQuery.map( this,fn );
			},
			slice:function(){
				//通过数组的slice截取部分元素（返回的是数组），把截取到的元素转换成实例对象返回
				// 因为slice的参数不确定，所以用 arguments
				// 把arguments的每一项传给数组的slice，所以用apply平铺传递过去
				// 最后用jQurey工厂返回对象
				return jQuery( [].slice.apply(this, arguments) );
			},
			first:function(){
				return this.eq(0);
			},
			last:function(){
				return this.eq(-1);
			},
			push:[].push,
			sort:[].sort,
			splice:[].splice
		};

		//给jQuery和原型分别添加extend方法
		jQuery.extend = jQuery.fn.extend = function( obj ){
			for(var key in obj){
				this[key] = obj[key];
			}
		}
		// 给jQuery添加一些静态方法
		jQuery.extend({
			//each 方法
			each : function (obj, fn){
				if(jQuery.isArray(obj)){
					for(var i = 0; i < obj.length ;i++){
						if(fn.call( obj[ i ], i, obj [ i ] ) === false){
							break;
						}
					}
				}else{
					for(var key in obj){
						if(fn.call( obj[ key ], key, obj [ key ] ) === false){
							break;
						}
					}
				}
				return obj;
			},

			//map实现
			map : function ( obj, fn ){
				//先判断是不是数组或伪数组
					// 是，通过 i 的方式遍历这个对象
					// 不是，通过 for in 的方式遍历对象
				// 在遍历过程中，把每一次便利到的key和val分别传给回调
				// 同时再给回调传参的时候，需要收集回调的返回值，最后把所有的返回值构成新数组返回（！each与map的区别！）
				var i,key,result = [];
				if(jQuery.isArray(obj)){
					for(i = 0; i < obj.length ;i++){
						result.push(fn.call( obj[ i ], obj [ i ], i ));
					}
				}else{
					for(key in obj){
						result.push(fn.call( obj[ key ], obj [ key ], key ));
					}
				}
				return result;
			},

			//去空格
			trim: function( str ){

			// null、undefined、NaN、0、false、''
			if( !str ){
				return str;
			}

			//优先使用原生方法
			if( str.trim ){
				return str.trim();
			}

			//自己实现
			return str.replace(/^\s+|\s+$/g,'');
			},

			// 判断是不是html片段
			isHTML : function ( html ){
				return !!html && html.charAt(0) === '<' && html.charAt( html.length - 1 ) === '>' && html.length >= 3;
			},

			// 判断是不是函数
			isFunction : function ( fn ){
				return typeof fn === 'function';
			},

			// 判断是不是window
			isWindow : function ( w ){
				return !!w && w.window === w;
			},

			// 判断是不是Object
			isObject : function ( obj ){
				if ( obj === null ) {
	                return false;
	            }
	            if ( typeof obj === 'object' || typeof obj === 'function' ) {
	                return true;
	            }
	            return false;
			},

			//判断是否为String
			isString: function( str ) {
				return typeof str === 'string';
			},

			//判断是不是真数组或伪数组
			isArray : function( arr ){
				// Function、window、!Object
				if( jQuery.isFunction( arr ) || jQuery.isWindow( arr ) || !jQuery.isObject( arr ) ){
					return false;
				}
				// 判断是不是真数组
	            if ( ({}).toString.call( arr ) === '[object Array]' ) {
	                return true;
	            }
	            // 判断是不是伪数组
	            if ( 'length' in arr && ( arr.length === 0 || arr.length - 1 in arr ) ) {
	                return true;
	            }

	            return false;
			},


			ready : function( fn ){
				//先统一判断 DOMContentloaded 有没有触发
				//通过 document.readyState == 'complete' 判断
				//如果为 true，fn可以直接调用
				//否则，判断支不支持 addEventListener
					//支持，绑定 DOMContentloaded 事件
					//不支持，使用 attachEvent 绑定 onreadystatechange 事件（需要在这里判断 document.readyState == 'complete' 才能执行fn 防止fn多次执行）
				if( document.readyState === 'complete' ){
					fn();
				}else if( document.addEventListener ){
					document.addEventListener('DOMContentLoaded', fn);
				}else{
					document.attachEvent('onreadystatechange', function(){
						if( document.readyState === 'complete' ){
							fn();
						}
					});
				}
			}
		});

		// 真正的构造函数，同时把构造函数放在了原型中
		var init = jQuery.fn.init = function( selector ){
			// null、undefined、NaN、0、false、''
            if ( !selector ) {
				return this;
            }

            //function
            if( jQuery.isFunction( selector )){
            	//打包给ready静态方法处理
            	jQuery.ready( selector );
            }

            // string ==> ( html || selector )
            else if(jQuery.isString( selector )){
            	//去空格
            	selector = jQuery.trim( selector );

            	// html片段
            	if( jQuery.isHTML( selector ) ){
            		// 利用一个临时的div来创建DOM，然后把创建好的DOM依次push给实例
            		var tempDiv = document.createElement('div');
            		tempDiv.innerHTML = selector;
            		[].push.apply( this, tempDiv.childNodes);
            	}else{
            		// selector
            		try{
            			[].push.apply( this, document.querySelectorAll( selector ));
            		}catch(e){
            			// 如果报错了，那么补一个length属性，代表没有获取到任何元素
            			this.length = 0;
            		}
            	}
            }
            //不是String   array || likeArray
            else if( jQuery.isArray( selector )){
            	[].push.apply( this, [].slice.call( selector ) );
            }
            //其他
            else{
            	this[0] = selector;
            	this.length = 1;
            }
		};

		// 替换init的原型为工厂的原型，这样外界就可以通过工厂给实例扩展方法
        init.prototype = jQuery.fn;
		// 暴露工厂和工厂简称
		w.jQuery = w.$ = jQuery;

	}(window));