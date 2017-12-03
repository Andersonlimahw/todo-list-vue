// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import VueResource from 'vue-resource'
import VueEvents from './plugins/events'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueEvents)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
    <div id="app">
    <router-view class="view"></router-view>  
    </div>
  `,
  components: { App }
})
