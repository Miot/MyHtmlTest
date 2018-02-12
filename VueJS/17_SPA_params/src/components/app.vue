<template>
	<div>
		<div class="h">我是头部</div>
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