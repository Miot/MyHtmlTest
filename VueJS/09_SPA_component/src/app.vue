<template>
	<div>
		<headerVue></headerVue>
		<bodyVue></bodyVue>
		<footerVue></footerVue>
	</div>
</template>
<script>
//引入子组件对象
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';

	export default{
		data(){
			return {
				
			}
		},
		// 声明组件对象函数
		methods: {},
		components:{
			// 组件名 ： 组件对象
			headerVue:headerVue,
			bodyVue:bodyVue,
			// 简写
			footerVue
		}
	}
</script>
<style>

</style>