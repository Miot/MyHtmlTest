<template>
	<div>
		我是sub
		<button @click="call">打电话</button>
	</div>
</template>

<script>
import connect from '../connector.js';
export default {
  data(){
    return {

    }
  },
  methods:{
    call(){
      // 发射信号
      connect.$emit('phone','来自子组件的msg');
    }
  }
  
}
</script>
<style>
</style>
