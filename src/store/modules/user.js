import * as types from '../types';

const userModule = {
  state: {
    name: 'Mike',
  },

  mutations: {
    [types.USER__MUTATE_USER](localState, payload) {
      Object.assign({}, localState, payload);
    },
  },

  actions: {
    [types.USER__UPDATE_USER]({ commit }, payload) {
      commit(types.USER__MUTATE_USER, payload);
    },
  },
};

export default userModule;
