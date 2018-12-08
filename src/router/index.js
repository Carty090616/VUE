import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import B from '@/components/B/B'
import form from '@/components/form/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/B',
      name: 'B',
      component: B
    },
    {
      path: '/form',
      name: 'form',
      component: form
    }
  ]
})
