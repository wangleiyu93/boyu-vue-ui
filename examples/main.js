import Vue from 'vue'
import App from './App.vue'

//整体引入
import './../packages/css/index.scss'
import YuVueUI from './../packages/index'
Vue.use(YuVueUI)

//按需引入
// import './../packages/css/card.scss'
// import Card from './../packages/card';//
// Vue.use(Card);

//引入重制样式
import './assets/style/reset.css'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);//注册router-view,router-link
import router from './router'

//false关闭生产模式的消息，一般是vue提供的警告
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
