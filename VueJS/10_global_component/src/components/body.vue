<template>
	<div>
		body组件--
		{{texttwo}}
	</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['texttwo']
}
</script>
<style scoped>
	div{
		height: 100px;
		background-color: yellowgreen;
	}
</style>