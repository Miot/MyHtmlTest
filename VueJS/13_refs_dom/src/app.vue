<template>
	<div>
		<subVue ref='sub'></subVue>
    <div ref='myDiv'>{{text}}</div>
	</div>
</template>

<script>
import SubVue from './sub.vue';

export default {
  data(){
    return {
    	text:''
    }
  },
  components:{
  	subVue: SubVue
  },
  // 组件创建后 数据已经初始化， 但是dom还没完成
  created(){// 事件的处理函数（created）
    console.log('created:',this.$refs.myDiv);
  },
  // 数据转载到dom上后 各种数据已经就位，将数据渲染到dom上，Dom已经生成
  mounted(){
    console.log('mounted:',this.$refs.myDiv);
    // 获取组件对象，并获取其dom对象
    console.log('sub:',this.$refs.sub.$el);
    // 原生dom
    // this.$refs.myDiv.innerHTML = '123';
    // this.$refs.sub.$el.innerHTML = '123';
    // 双向数据绑定
    this.text = '456';
  }
}
</script>

<style>
</style>