// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入 mui 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// 导入 vue-resource 
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)

// 导入 mint-ui js 组件
import { Swipe, SwipeItem } from 'mint-ui';

// 导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 将 Mint UI 安装到 Vue 中去
Vue.use(MintUI)


// 导入自己的 router.js 路由模块
import router from './router'

// 导入 App 组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c=>c(app),
  router
})