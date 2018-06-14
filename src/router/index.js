import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      name: 'login',
      component: ()=> import('@/components/login')
    },
    {
      path: '/home',
      name:'home',
      component: ()=> import('@/components/home'),
      children:[
        {
          path: 'sixone',
          name: 'sixone',
          component: ()=> import('@/components/sixone')
        },
        {
          path: 'diaobao',
          name:'diaobao',
          component: ()=> import('@/components/diaobao')
        },
        {
          path: 'laowang',
          name: 'laowang',
          component: ()=> import('@/components/laowang')
        },
        {
          path: 'sub',
          name: 'sub',
          component: ()=> import('@/components/sub')
        },
        {
          path:'jiagui',
          name:'jiagui',
          component: ()=> import('@/components/jiagui')
        }

      ]

    }
  ]
})
