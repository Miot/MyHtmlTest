<template>
	<div>
		请输入内容:
		<input type="text" name="" v-model='text'>
		显示:
		{{text | myFilter}}
		<hr/>
		<!-- 测试组件的范围 -->
		<subVue></subVue>
	</div>
</template>

<script>
import SubVue from './sub.vue';

export default {
  filters:{
  	myFilter: function(value){
  		// 对输入内容做反转
  		// 转成数组 反转数组 转成字符串
  		return value.split('').reverse().join('');
  	}
  },
  data(){
    return {
    	text:''
    }
  },
  components:{
  	subVue: SubVue
  }
}
</script>

<style>
</style>