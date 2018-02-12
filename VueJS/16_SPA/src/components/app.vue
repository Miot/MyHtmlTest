<template>
	<div>
		<div class="h">我是头部
		<!-- <a href="#/music">音乐</a>
		<a href="#/movie">电影</a> -->
		<a href="#/">主页</a>
		<router-link :to="{name:'music'}">音乐</router-link>
		<router-link to="/movie">电影</router-link>
		</div>
		<!-- 留坑 -->
		<router-view class="b"></router-view>
		<div class="f">我是底部</div>
	</div>
</template>

<script>
export default {
  data () {
    return {

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