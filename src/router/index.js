import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/components/HomeScreen'
import MapScreen from '@/components/MapScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '/home',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '/map',
      name: 'MapScreen',
      component: MapScreen
    }
  ]
})
