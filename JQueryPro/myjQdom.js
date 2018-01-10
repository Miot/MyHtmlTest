//给原型扩充dom方法
$.fn.extend({
		empty : function (){
			for(var i = 0 ; i<this.length ; i++){
				this[ i ].innerHTML = '';
			};
			// 为了链式编程
			return this;
		},
		// 改进版
		_empty : function(){
			this.each(function(){
				//这里的this指向遍历到的每一个元素
				this.innerHTML = '';
			});
			return this;
		},

		remove : function(){
			for(var i = 0 ; i<this.length ; i++){
				this[ i ].parentNode.removeChild(this[ i ]);
			};
			// 为了链式编程
			return this;
		},
		// 改进版
		_remove : function ( likeArray ){
			this.each(function(){
				this.parentNode.removeChild(this);
			});
			return this;
		},

		html : function( html ){
			if( arguments.length === 0 ){
				return this[0].innerHTML;
			}else if( arguments.length >= 1 ){
				for(var i = 0 ; i<this.length ; i++){
					this[ i ].innerHTML = html;
				}
			};
			// 为了链式编程
			return this;
		},
		_html : function( html ){
			if( arguments.length === 0 ){
				return this.get[0].innerHTML;
			}else{
				this.each(function(){
					this.innerHTML = html;
				})
			};
			return this;
		},

		text : function ( text ){
			var result = '';
			if( this.length === 0 ){
				for(var i = 0 ; i<this.length ; i++){
					result += this[ i ].innerText;
				}
				return result;
			}else{
				for(var i = 0 ; i<this.length ; i++){
					this[ i ].innerText = text;
				}
			}
			// 为了链式编程
			return this;
		},
		_text : function ( text ){
			var result = '';
			if( this.length === 0 ){
				this.each(function(){
					result += this.innerText;
				});
				return result;
			}else{
				this.each(function(){
					this.innerText = text;
				});
			}
			return this;
		},

		appendTo : function( selector ){
			// 定义一个数组，用来存储将来所有被添加的元素
			// 遍历所有的元素
			// 使用jQuery包装selector，把不同的参数统一为jQ实例
			// 在外层遍历所有的元素（this）
			// 在内层遍历所有的目标（包装后的jQ实例）
			// 在内层判断
				// 如果是第一次，则把外面遍历的元素本体添加到内层遍历到的元素
				// 如果不是,则把外层遍历到的元素clone版本添加到内层遍历到的元素
			// 返回存储被添加元素的数组用jQ包装后返回
			var result = [],tempNode = null;
			var $selector = $(selector);
			for(var i = 0; i < this.length;i ++){
				for(var j = 0; j < $selector.length; j++){
					if( j===0 ){
						tempNode = this[i];
						$selector[j].appendChild( tempNode );
						result.push( tempNode );
					}else{
						tempNode = this[i].cloneNode(true)
						$selector[j].appendChild(tempNode);
						result.push( tempNode );
					};
				};
			};
			// 把所有被添加的元素保证成新实例返回，
            // 这样可以对所有被添加的元素进行链式编程。
            return jQuery( result );
		},
		_appendTo : function( selector ){
			var result = [],tempNode = null;
			var $selector = $(selector);
			this.each(function(){
				var that = this;
				$selector.each(function(i){
					tempNode = i === 0? that : that.cloneNode(true);
					this.appendChild(tempNode);
					result.push(tempNode);
				});
			});
			return jQuery( result );
		},

		prependTo : function( selector ){
			// 定义一个数组，用来存储将来所有被添加的元素
			// 遍历所有的元素
			// 使用jQuery包装selector，把不同的参数统一为jQ实例
			// 在外层遍历所有的元素（this）
			// 在内层遍历所有的目标（包装后的jQ实例）
			// 在内层判断
				// 如果是第一次，则把外面遍历的元素本体添加到内层遍历到元素的最前面
				// 如果不是,则把外层遍历到的元素clone版本添加到内层遍历到元素的最前面
			// 返回存储被添加元素的数组用jQ包装后返回
			var result = [],tempNode = null;
			var $selector = $(selector);
			for(var i = 0; i < this.length;i ++){
				for(var j = 0; j < $selector.length; j++){
					tempNode = j === 0? this[i] : this[i].cloneNode(true);
					$selector[j].insertBefore(tempNode,$selector[j].firstChild);
					result.push(tempNode);
				};
			};
			// 把所有被添加的元素保证成新实例返回，
            // 这样可以对所有被添加的元素进行链式编程。
            return jQuery( result );
		},
		_prependTo : function( selector ){
			var result = [],tempNode = null;
			var $selector = $(selector);
			// 这里的this指 selector
			this.each(function(){
				// 这里this指向每一个被添加的元素
				var that = this;
				$selector.each(function(i){
					tempNode = i === 0? that: that.cloneNode(true);
					// 这里this指向每一个被添加的元素的目的地
					this.insertBefore(tempNode,this.firstChild);
					result.push(tempNode);
				});
			});
			return jQuery( result );
		},

		append : function( context ){
			// 判断context是不是字符串
				// 是,则把这个字符串累加给所有元素
				// 不是，先把context包装成jQ对象统一处理
				// 复用appendTo
				// 返回this
			var $context = $(context);
			if(jQuery.isString( context )){
				for(var i = 0, len = this.length; i < len; i++){
					this[i].innerHTML += context;
				}
			}else{
				$context.appendTo( this );
			}
			return this;
		},
		_append : function( context ){
			var $context = $(context);
			if(jQuery.isString( context )){
				this.each(function(){
					this.innerHTML += context;
				})
			}else{
				$context.appendTo( this );
			}
			return this;
		},

		prepend : function( context ){
			// 判断context是不是字符串
				// 是,则把这个字符串累加给所有元素
				// 不是，先把context包装成jQ对象统一处理
				// 复用prependTo
				// 返回this
			var $context = $(context);
			if(jQuery.isString( context )){
				for(var i = 0, len = this.length; i < len; i++){
					this[i].innerHTML = context + this[i].innerHTML;
				}
			}else{
				$context.prependTo( this );
			}
			return this;
		},
		_prepend : function( context ){
			// 判断context是不是字符串
				// 是,则把这个字符串累加给所有元素
				// 不是，先把context包装成jQ对象统一处理
				// 复用prependTo
				// 返回this
			var $context = $(context);
			if(jQuery.isString( context )){
				this.each(function(){
					this.innerHTML = context + this.innerHTML;
				});
			}else{
				$context.prependTo( this );
			}
			return this;
		},
	})