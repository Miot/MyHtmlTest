import Vue from 'vue';
import App from './app.vue';

// 引入子组件
import sub from './components/sub.vue';

// 声明全局组件
Vue.component('subVue',sub);


new Vue({
	el: '.app',
	render:c  => c(App)
})