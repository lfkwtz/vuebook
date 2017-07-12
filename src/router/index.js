import Vue from 'vue';
import Router from 'vue-router';

import Feed from '@/components/Feed';
import Profile from '@/components/Profile';
import Signup from '@/components/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ],
});
