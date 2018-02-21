import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

import About from './components/About.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  // {
  //   path: '/tags',
  //   component: require("./components/Tags.vue")
  // },
  // {
  //   path: '/article/:id',
  //   component: require("./components/Article.vue")
  // },
  // {
  //   path: '/*',
  //   redirect: '/home'
  // },

]

const router = new VueRouter({
  routes
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')