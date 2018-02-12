import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Home from './components/home.vue';

Vue.use(VueRouter);

// 创建路由对象并配置路由规则
let router = new VueRouter({
	routes:[
	{path:'/home', component:Home}
	]
})

// new Vue 启动
new Vue({
	el:'#app',
	// 让vue知道路由规则
	router:router,
	render: c=>c(App),
})