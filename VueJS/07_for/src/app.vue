<template>
	<div>
		<ul>
			<!-- 操作数组的方式 -->
			<li v-for="(stu,index) in stus" :key="index">
				index:{{index}},stu:{{stu}}
			</li>
			<!-- 操作对象的方式 -->
			<li v-for="(value,key,index) in persons" :key="index">
				key:{{key}}
				value:{{value}}
				index:{{index}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				idRed: false,
				stus:[{name:'nameA',score:'A'},{name:'nameB',score:'B'}],
				persons:{name:'person1',age:1}
			}
		},
		// 声明组件对象函数
		methods: {
			
		}
	}
</script>
<style>
</style>