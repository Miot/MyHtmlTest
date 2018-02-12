import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/app.vue';
// 路由切换页面
import List from './components/list.vue';
import Detail from './components/detail.vue';

Vue.use(VueRouter);

// 创建路由对象并配置路由规则
let router = new VueRouter({
	routes:[
	{name:'list', path:'/list', component:List},
	// 在这需要声明
	// {name:'detail', path:'/detail', component:Detail}
	{name:'detail', path:'/detail/:id', component:Detail}
	]
})

// new Vue 启动
new Vue({
	el:'#app',
	// 让vue知道路由规则
	router,
	render: c=>c(App),
})