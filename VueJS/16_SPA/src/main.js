import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/app.vue';
// 路由切换页面
import Music from './components/music.vue';
import Moive from './components/movie.vue';

Vue.use(VueRouter);

// 创建路由对象并配置路由规则
let router = new VueRouter({
	routes:[
	{name:'music', path:'/music', component:Music},
	{path:'/movie', component:Moive}
	]
})

// new Vue 启动
new Vue({
	el:'#app',
	// 让vue知道路由规则
	router,
	render: c=>c(App),
})