//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
//路由切换页面
import header from './components/header.vue';
import footer from './components/footer.vue';
import Music from './components/music.vue';
import Oumei from './components/oumei.vue';
import Guochan from './components/guochan.vue';

//注册全局组件
Vue.component('headerVue', header);
Vue.component('footerVue', footer);

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
let router = new VueRouter({
    //routes
    routes: [
        {
            path:'/', 
            redirect:{name:'music'},
        },
        // 嵌套路由
        {
            name:'music', 
            path:'/music',
            component:Music,
            children:[
            // /xxx表示绝对路径  不写斜线就是相对路径
            {name:'music_oumei',path:'oumei', component:Oumei},
            {name:'music_guochan',path:'guochan', component:Guochan}
        ]}
        

    ]
});

//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router, //可以简写router
    render: c => c(App),
})