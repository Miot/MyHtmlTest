<template>
	<div>
		头组件--
		{{textone}}
		<button @click="show">从js中国获取父组件</button>
	</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  // 接收父组件值参数的设置
  props:['textone'],
  methods:{
  	show(){
  		alert(this.textone);
  	}
  }
}
</script>
<style scoped>
	div{
		height: 100px;
		background-color: green;
	}
</style>
