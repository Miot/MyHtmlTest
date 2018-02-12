<template>
	<div>
		<subVue></subVue>
		我是父组件
		<button @click="listen">听</button>
	</div>
</template>
<script>
// 引入连接器
import connect from './connector.js'

	export default{
		data(){
			return {
			}
		},
		// 声明组件对象函数
		methods: {
			listen(){
				connect.$on('phone', function(msg){
					console.log(msg);
				});
			}
		}
	}
</script>
<style>

</style>