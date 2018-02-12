<template>
	<div>
		<div class="h">我是头部</div>
		<!-- 留坑 -->
		<router-view class="b"></router-view>
		<div class="f">我是底部</div>
		<button @click="goMuisc">跳转到音乐</button>
		<button @click="testParams">测试编程导航传递参数</button>
		
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
  	goMuisc(){
  		// push 往指定地址跳转
  		this.$router.push('/music');
  	},
  	testParams(){
  		// 查询字符串的方式
  		this.$router.push({
  			name:'music', query:{id:1, name:2}
  		})
  	}
  }
}
</script>

<style lang="css" scoped>
.h{
	height: 100px;
	background-color: yellowgreen;
}
.b{
	height: 100px;
	background-color: skyblue;
}
.f{
	height: 100px;
	background-color: hotpink;
}
</style>