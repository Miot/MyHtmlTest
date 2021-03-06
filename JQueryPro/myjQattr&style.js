$.extend({
		//获取样式，已经处理了兼容性
		getStyle: function( dom,style ){
			if( window.getComputedStyle ){
				return window.getComputedStyle( dom )[ style ];
			}else{
				return dom.currentStyle[ style ];
			}
		}
	});
$.fn.extend({
	// 设置或者获取元素的属性节点值
	attr : function( attr,val ){
		// 判断attr是不是字符串或者对象
			// 不是，返回this
			// 如果是字符串，那么继续判断arguments的length
				// length == 1，则获取第一个元素指定的属性节点值返回
				// length >= 2, 则遍历所有元素，分别给他们设置新的属性节点值
			// 如果不是字符串（是对象），那么遍历这个对象，得到所有的属性节点值，然后遍历所有的元素，把所有的属性节点分别添加到这些元素中
		// return this
		if( !jQuery.isString( attr ) && !jQuery.isObject( attr )){
			return this;
		}else if (jQuery.isString( attr )){
			if( arguments.length == 1 ){
				return this.get( 0 ).getAttribute( attr );
			}else{
				for( var i = 0, len = this.length; i< len; i++){
					this[i].setAttribute( attr ,val );
				}
			};
		}else{
			for( var key in attr ){
				for( var i = 0, len = this.length; i< len; i++){
					this[ i ].setAttribute( key, attr[key] );
				}
			}
		};
		return this;
	},
	// 改进版
	_attr : function( attr,val ){
		// 判断arguments的length
				// length == 1，判断是不是字符串
					// 是，则获取第一个元素指定的属性节点值返回
					// 不是，判断是不是对象
						// 是，那么遍历这个对象，得到所有的属性节点值，然后遍历所有的元素，把所有的属性节点分别添加到这些元素中
				// length >= 2, 遍历所有元素，分别设置属性节点值
		// return this
		var that = this;
		if( arguments.length == 1 ){
			if( jQuery.isString( attr ) ){
				return this[0].getAttribute( attr );
			}else if( jQuery.isObject( attr ) ){
				jQuery.each( attr,function( key,val ){
					// 遍历所有元素
					that.each(function(){
						// 给遍历到的每一个元素分别设置外面遍历到的属性节点
						this.setAttribute( key,val );
					});
				});
			}
		}else{
			// 遍历所有元素分别设置对应的属性节点值
			this.each(function(){
				this.setAttribute( attr,val )
			})
		};
		return this;
	},

	// prop 设置 或者 获取 元素的属性值
	prop : function( attr,val ){
		// 判断attr是不是字符串或者对象
			// 不是，返回this
			// 如果是字符串，那么继续判断arguments的length
				// length == 1，则获取第一个元素指定的属性值返回
				// length >= 2, 则遍历所有元素，分别给他们设置新的属性值
			// 如果不是字符串（是对象），那么遍历这个对象，得到所有的属性值，然后遍历所有的元素，把所有的属性值分别添加到这些元素中
		// return this
		if( !jQuery.isString( attr ) && !jQuery.isObject( attr )){
			return this;
		}else if (jQuery.isString( attr )){
			if( arguments.length === 1){
				return this[ 0 ][ attr ];
			}else{
				for( var i=0, len=this.length; i<len; i++){
					this[ i ][ attr ]  = val;
				};
			};
		}else if (jQuery.isObject( attr )){
			for( var key in attr ){
				for( var i=0, len=this.length; i<len; i++){
					this[ i ][ key ] = attr[ key ];
				}
			};
		};
		return this;
	},
	_prop : function( attr,val ){
		var that = this;
		if( arguments.length === 1){
			if( jQuery.isString( attr ) ){
				return this[0][ attr ];
			}else{
				jQuery.each( attr,function( key,val ){
					that.each( function(){
						this[ key ] = val;
					})
				})
			}
		}else{
			this.each( function(){
				this[ attr ] = val;
			})
		};
		return this;
	},

	//设置 或者 设置样式
	css : function( styleName,style ){
		// 如果arguments.length为1
			// 判断styleName是不是字符串，是则获取第一个元素指定的样式
			// 判断styleName是不是对象，是则遍历这个对象得到所有的样式分别设置给所有的元素
		// 如果arguments.length >= 2 遍历所有元素分别设置指定的样式
		// return this
		if( arguments.length === 1){
			if( jQuery.isString( styleName ) ){
				return jQuery.getStyle( this[ 0 ],styleName );
			}else{
				for( var key in styleName ){
					for( var i=0, len=this.length; i<len; i++ ){
						this[ i ][ 'style' ][ key ] = styleName[ key ];
					}
				}
			}
		}else if( arguments.length >= 2 ){
			for( var i=0, len=this.length; i<len; i++ ){
				this[ i ][ 'style' ][ styleName ] = style;
			}
		}
		return this;
	},


	//设置 或者 设置元素的value属性值
	val : function( value ){
		// 如果 arguments.length === 0，则直接返回第一个元素的value属性值
		// 否则，遍历所有的元素，分别设置对应的value属性值
		// retu this
		if( arguments.length === 0 ){
			return this[ 0 ].value;
		}else{
			for( var i=0, len=this.length; i<len; i++ ){
				this[ i ].value = value;
			}
		};
		return this;
	},
	_val : function( value ){
		if( arguments.length === 0 ){
			return this[ 0 ].value;
		}else{
			this.each(function(){
				this.value = value;
			})
		}
	},
	// 复用prop版
	__val : function( value ){
		if( arguments.length === 0 ){
			return this.prop( 'value' );
		}else{
			this.prop( 'value',value );
		}
	},

	// 判断元素中是否含有指定的class
	hasClass : function( className ){
		// 遍历所有的元素
		// 依次获取每一个元素的className，首尾加空格
		// 利用处理过的className字符串的indexOf方法判断有没有指定的class
		// indexOf ！== -1 证明有，返回true
		for( var i=0, len=this.length; i<len; i++ ){
			if( (' '+this[ i ].className+' ').indexOf(' '+className+' ') > -1 ){
				return true;
			}
		};
		return false;
	},
	_hasClass : function( className ){
		var flag = false;
		this.each(function(){
			if( (' '+this.className+' ').indexOf(' '+className+' ') > -1 ){
				flag = true;
				// 中断遍历
				return false;
			}
		})
		return flag;
	},

	//  给所有的元素添加指定的class
	addClass : function( className ){
		// 遍历所有的元素
		// 依次判断每一个元素有没有要添加的className
			//有则忽略(防止重复)，没有则添加 （ className += ‘ ’+ className ）;
		// 最后整体 trim() 去空格
		// return this 
		this.each(function(){
			if( !jQuery(this).hasClass( className ) ){
				this.className += ' '+ className;
			}
		});
		return this;
	},
	_addClass : function( classNames ){
		// 先把classNames 首尾空格去掉，然后用split(' ')劈成数组
		// 外层遍历所有元素
		// 内层遍历所有要添加的class
		// 依次判断遍历的每一个元素有没有遍历到的每一个要添加的class
			// 有，忽略
			// 没有，添加  className += ‘ ’+ className ）
		// 最后整体 trim() 去空格
		// return this 
		classNames = jQuery.trim( classNames ).split(' ');
		this.each(function(){
			// 这里的this是遍历到的每一个原生dom，为了复用，需要包装
			var $this = jQuery( this );
			//  这里便是所有要添加的class
			jQuery.each( classNames, function( i,val ){
				if( !$this.hasClass( val ) ){
					$this[ 0 ].className += ' ' + val;
				}
			});
		});
		return this;
	},

	// 删除所有的元素指定的class
	removeClass : function( className ){
		// 没有参数，遍历所有的元素，设置他们的className为空
		// 有参数，遍历所有的元素，删除指定的className（元素.className.replace()），把指定的className替换为空格
		// 最后整体 trim() 去空格
		// return this
		if( arguments.length === 0 ){
			this.each(function(){
				this.className = '';
			});
		}else{
			this.each(function(){
				this.className = (' ' + this.className + ' ').replace( ' ' + className + ' ',' ');
			});
		};
		return this;
	},
	_removeClass : function( classNames ){
		// 没有参数，遍历所有的元素，设置他们的className为空
		// 有参数,首尾空格去掉，然后用split(' ')劈成数组
		// 外层遍历所有元素
		// 内层遍历所有要添加的class
		// 遍历到的每一个元素删除遍历到的class
		// return this
		if( arguments.length === 0 ){
			this.each(function(){
				this.className = '';
			});
		}else{
			classNames = jQuery.trim( classNames ).split(' ');
			this.each(function(){
				var that = this;
				jQuery.each( classNames,function( i,val ){
					that.className = that.className.replace(new RegExp('\\b' + val + '\\b'),' ');
				})
			});
		};
		return this;
	},

	// 有则删除，无则添加
	toggleClass : function( className ){
		this.each(function(){
			var $this = jQuery(this);
			if( $this.hasClass( className )){
				$this.removeClass( className );
			}else{
				$this.addClass( className );
			}
		});
		return this;
	},
	_toggleClass : function( classNames ){
		// 先把classNames 首尾空格去掉，然后用split(' ')劈成数组
		// 外层遍历所有元素
		// 内层遍历所有的class
		// 遍历到的每一个元素判断有没有遍历到的每一个class，有则删除，没有就添加
		// return this 
		classNames = jQuery.trim( classNames ).split(' ');
		this.each(function(){
			var $this = jQuery(this);
			jQuery.each( classNames,function( i,val ){
				if( $this.hasClass( val ) ){
					$this.removeClass( val );
				}else{
					$this.addClass( val );
				}
			});
		});
		return this;
	},
});