// 引入 vue
import Vue from 'vue';
// 引入 app.vue
import App from './app.vue';


new Vue({
	el:'#app',
	render: c => c(App)
});