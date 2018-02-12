<template>
  <div>
    <mt-header title="多个按钮">
      <mt-button icon="back">返回</mt-button>
      <mt-button>关闭</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-switch v-model="value"></mt-switch>

    <button @click="handleClose">显示弹出框</button>

    <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>


</mt-swipe>

	</div>
</template>

<script>
// 在js部分 所有变量都是模块作用域，如果想使用就必须引入
import {Toast} from 'mint-ui';

export default {
  data(){
    return {
    	text:'',
      value:true
    }
  },
  methods:{
    handleClose(){
      Toast('提示信息');
    }
  }
}
</script>

<style>
</style>