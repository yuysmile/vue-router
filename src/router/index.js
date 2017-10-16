import Vue from 'vue'
import Router from 'vue-router'
// import App from 'App'
import HelloWorld from '@/components/HelloWorld'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'Info',
      component: info
    }
  ]
})
// const app = new Vue({
//   Router,
//   render: h => h(App)
// }).$mount('#app')
