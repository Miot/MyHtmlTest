// 引入 vue
import Vue from 'vue';
// 引入 app.vue
import App from './app.vue';


// 创建全局过滤器
Vue.filter('myFilter',function(value){
	return '我是全局过滤器';
});

new Vue({
	el:'#app',
	render: c => c(App)
});