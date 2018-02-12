<template>
	<div>
		<ul>
			<li v-for="(list, index) in lists" :key="index" :class="{'1':'red','2':'green','3':'yellow'}[list.age]">
				{{list.name}},{{list.age}}
				<button @click="del(index)">删除</button>
			</li>
		</ul>
		Name:<input type="text" name="" v-model="name"><br/>
		Age:<input type="text" name="" v-model="age"><br/>
		<button @click="addList">添加元素</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				name:'',age:'',
				lists:[{name:'name1',age:1},{name:'name2',age:2},{name:'name3',age:3}]
			}
		},
		// 声明组件对象函数
		methods: {
			addList(){
				this.lists.push({
					name:this.name,
					age:this.age
				});
				this.name='';
				this.age='';
			},
			del(index){
				this.lists.splice(index, 1);
			}
		}
	}
</script>
<style>
ul{
	list-style: none;
}
.red{
	background-color: red;
}
.green{
	background-color: green;
}
.yellow{
	background-color: yellow;
}
</style>