// 入口文件
import Vue from 'vue'

// 导入 mui 的样式
import './lib/mui/css/mui.css'

// 导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 将 Mint UI 安装到 Vue 中去
Vue.use(MintUI)

// 导入 App 组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c=>c(app)
})