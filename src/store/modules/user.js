import * as types from '../types';

const userModule = {
  state: {
    name: '',
    email: '',
  },

  mutations: {
    [types.USER__MUTATE_USER](localState, payload) {
      Object.assign(localState, payload);
    },
  },

  actions: {
    [types.USER__UPDATE_USER]({ commit }, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit(types.USER__MUTATE_USER, payload);
          resolve();
        }, 2000);
      });
    },
  },
};

export default userModule;
