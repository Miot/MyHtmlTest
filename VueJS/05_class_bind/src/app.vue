<template>
	<div>
		<div v-bind:class="idRed?'red':'green'">单个class</div>
		<div :class="{'red':true,'big':true}">多个class</div>
		<ul>
			<li v-for="stu in stus" :class="{'A':'green','B':'red'}[stu.score]">
				{{stu.name}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				idRed: false,
				stus:[{name:'nameA',score:'A'},{name:'nameB',score:'B'}]
			}
		}
	}
</script>
<style>
	.red{
		background-color: red;
	}
	.green{
		background-color: green;
	}
	.big{
		font-size:30px;
	}
</style>