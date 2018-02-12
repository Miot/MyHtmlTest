<template>
	<div>详情</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created(){
  	// 获取路由参数
  	// vue-router 主要挂载两个对象的属性
  	// 1. $route(信息数据)
  	// 2. $router(功能函数)
  	console.log(this.$route.query);
  	console.log(this.$route.params);
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
</style>