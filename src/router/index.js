import Vue from 'vue';
import Router from 'vue-router';

import Feed from '@/components/Feed';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
