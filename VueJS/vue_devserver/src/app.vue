<template>
	<div>
		{{text}}<br/>
		<input type="text" v-model="text">
		<ul>
			<li v-for="name in list">
				{{name.name}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {

//   name: 'app',

	data () {
	    return {
	    	text:"Hello World",
	    	list:[{name:'name1'},{name:'name2'}]
	    }
	}
}
</script>

<style>
</style>