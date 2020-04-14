import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import {post,fetch} from './plugins/http'
import api from "./plugins/api";
import qs from 'qs';
import './styles.scss'

Vue.use(ElementUI)
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$api=api;
Vue.prototype.$qs=qs;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
