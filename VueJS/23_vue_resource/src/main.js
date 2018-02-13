//引入
import Vue from 'vue';

//主体
import App from './components/app.vue';

//引入
import VueResource from 'vue-resource';
//安装插件
Vue.use(VueResource);

//new Vue 启动
new Vue({
    el: '#app',
    render: c => c(App),
})