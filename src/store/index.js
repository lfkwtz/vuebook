import Vue from 'vue';
import Vuex from 'vuex';

import feed from './modules/feed';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    feed,
    user,
  },
});

export default store;
