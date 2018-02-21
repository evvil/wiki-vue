import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/home', component: require("./components/Home.vue") },
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})
// // 路由map
// router.map({
//   '/home': {
//     component: function (resolve) {
//       require(['./components/Home'], resolve)
//     }
//   },
//   '/about': {
//     component: function (resolve) {
//       require(['./components/About'], resolve)
//     }
//   },
//   '/tags': {
//     component: function (resolve) {
//       require(['./components/Tags'], resolve)
//     }
//   },
//   '/article/:id': {
//     name: 'article',
//     component: function (resolve) {
//       require(['./components/Article'], resolve)
//     }
//   }

// })

// router.redirect({
//   '*': '/home'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')