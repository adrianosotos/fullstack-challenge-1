import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductList from './components/ProductList.vue'
import ProductPage from './components/ProductPage.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
      component: ProductList
    },
    {
      path: '/product/:id',
      component: ProductPage
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
