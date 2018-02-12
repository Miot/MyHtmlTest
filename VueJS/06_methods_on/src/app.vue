<template>
	<div>
		<div v-bind:class="idRed?'red':'green'">单个class</div>
		<div :class="{'red':true,'big':true}">多个class</div>
		<ul>
			<li v-for="stu in stus" :class="{'A':'green','B':'red'}[stu.score]">
				{{stu.name}}
			</li>
		</ul>
		<button @click="change">click</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				idRed: false,
				stus:[{name:'nameA',score:'A'},{name:'nameB',score:'B'}]
			}
		},
		// 声明组件对象函数
		methods: {
			// 包含多个函数名做 key
			change(){
				this.isRed = !this.isRed;
				this.stus.push({
					name:'nameC', score:'A'
				})
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