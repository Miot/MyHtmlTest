<template>
	<div>
		我是电影
		<button @click="goBack">上一页</button>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },methods:{
  	goBack(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<style lang="css" scoped>
</style>