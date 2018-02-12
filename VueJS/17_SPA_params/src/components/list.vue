<template>
	<div>列表:
		<ul>
			<li v-for="(person, index) in persons" :key="index">
				{{person.name}}
				<!-- query    /id0/1     不需要声明添加的位置 自然在？后-->
				<!-- params    /0/1      需要在main中声明在哪里添加-->
				<router-link :to="{name:'detail', params:{id:index}}">查看详情</router-link>	
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	persons:[{name:'name1'},{name:'name2'}]
    }
  }
}
</script>

<style lang="css" scoped>
</style>