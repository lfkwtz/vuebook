import * as types from '../types';

const userModule = {
  state:
  [
    {
      id: 1,
      type: 'img',
      likes: 1,
      user: 'John Smith',
      data: {
        caption: 'This is my cute cat',
        link: 'http://loremflickr.com/320/320/cat',
      },
    },
    {
      id: 2,
      type: 'txt',
      likes: 1,
      user: 'Robert Davenport',
      data: {
        content: 'Thank you for all the birtday wishes',
      },
    },
    {
      id: 3,
      type: 'img',
      likes: 1,
      user: 'John Smith',
      data: {
        caption: 'Do you like this cute pup?',
        link: 'http://loremflickr.com/320/320/dog',
      },
    },
  ],

  mutations: {
    [types.USER__MUTATE_FEED](localState, payload) {
      Object.assign({}, localState, payload);
    },
  },

  actions: {
    [types.USER__UPDATE_FEED]({ commit }, payload) {
      commit(types.USER__MUTATE_FEED, payload);
    },
  },
};

export default userModule;
