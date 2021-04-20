
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
import Vue from 'vue'

Vue.use(VueRouter)

const routes =  new Router({
  mode : 'history',
  base: process.evn.BASE_URL,
  routes:[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta: {
      requiredAuth: true
    }
    
  },
  {
    path: '/faq',
    name: 'FAQ',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQ.vue')
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
    
  },
  {
    path: '/register',
    name: 'Register',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta: {
      requiresGuest: true
    }
    
  },
  {
    path: '/pricing',
    name: 'Pricing',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Pricing.vue')
  },

]

});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/dashboard');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;
