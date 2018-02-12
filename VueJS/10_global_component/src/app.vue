<template>
	<div>
		<headerVue textone="大"></headerVue>
		<bodyVue :texttwo="text2"></bodyVue>
		<footerVue></footerVue>
	</div>
</template>
<script>

	export default{
		data(){
			return {
				text2:'hi'
			}
		},
		// 声明组件对象函数
		methods: {}
	}
</script>
<style>

</style>