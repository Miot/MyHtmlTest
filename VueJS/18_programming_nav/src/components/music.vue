<template>
	<div>
		我是音乐
		<button @click="goBack">上一页</button>
		<button @click='goMovie'>跳转到电影</button>
		<button @click="go">下一页</button>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },methods:{
  	goMovie(){
  		this.$router.push({
  			name:'movie'
  		});
  	},
  	goBack(){
  		this.$router.go(-1);
  	},
  	go(){
  		this.$router.go(1);
  	}
  }
}
</script>

<style lang="css" scoped>
</style>