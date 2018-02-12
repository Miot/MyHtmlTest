<template>
	<div>
		<!-- 原样输出 -->
		<pre>
			* v-text 是元素的innerText 只能在双标签中使用
			* v-html 是元素的innerHTML 不能包含<!-- {{xxx}} -->
			* v-if 元素是否移除或插入
			* v-show 元素是否显示或隐藏
			* v-model 双向数据绑定
		</pre>
		v-text:
		<span v-text='text'></span>
		<hr/>
		v-html:
		<span v-html='html'></span>
		<hr/>
		v-if:
		<div v-if="isShow" style='height:100px;background-color:gray;'></div>
		<hr/>
		v-show:
		<div v-show="isShow" style='height:100px;background-color:green;'></div>
		<hr/>
		v-model:
		<input type="text" name="" v-model="mTest">
		{{mTest}}
		<br/>
		<!-- 给下面的input的value赋值 用v-bind:value="mTest"(单向的 不印象页面) -->
		<input type="text" name="" v-bind:value="mTest">
	</div>
</template>
<script>
	export default{
		data(){
			return {
				text:'我是v-text',
				html:`
					<ul>
						<li>我是html</li>
					</ul>
				`,
				isShow:false,
				mTest:"mTest"
			}
		}
	}
</script>
<style>
	
</style>