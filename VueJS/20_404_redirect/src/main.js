import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';

// 引入notFoundVue
import NotFound from './notFound.vue';

import Home from './home.vue';
// 安装插件
Vue.use(VueRouter);

// 创建路有对象配置路由规则
let router = new VueRouter();
router.addRoutes([
	// 重定向
	// { path:'/', redirect:'/home' },
	// { path:'/home', component:Home }
	{path:'/',redirect:{name:'home'}},
	{name:'home',path:'/home',component:Home},
	// 404
	{ path:'*', component:NotFound }
]);

new Vue({
	el:'#app',
	router,
	render: c=>c(App)
})