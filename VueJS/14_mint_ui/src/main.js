// 引入 vue
import Vue from 'vue';
// 引入 app.vue
import App from './app.vue';
// 引入 mint-ui
import MintUI from 'mint-ui';
// 引入 mint-ui样式
import 'mint-ui/lib/style.css';

// 安装插件
Vue.use(MintUI);
// use实际操作
// 1.组件库 在内部注册了各种全局组件
// 2.插件 挂载属性，为了方便this 可以使用到其功能


new Vue({
	el:'#app',
	render: c => c(App)
});