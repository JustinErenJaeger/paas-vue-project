import Vue from 'vue';
import VueRouter from 'vue-router';
import Organizations from '../views/Organizations.vue';
import Dashboard from '../views/Dashboard.vue';
import Signup from '../views/Signup.vue';
import Signin from '../views/Signin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/organizations',
    name: 'organizations',
    component: Organizations,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// router.replace('/signin');

export default router;
