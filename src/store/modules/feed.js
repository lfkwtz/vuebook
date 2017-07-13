import * as types from '../types';

const userModule = {
  state:
  [
    {
      id: 2,
      type: 'img',
      likes: 1,
      user: 'John Smith',
      data: {
        caption: 'This is my cute cat',
        link: 'http://i.imgur.com/EwoQzuI.jpg',
      },
    },
    {
      id: 1,
      type: 'txt',
      likes: 1,
      user: 'Robert Davenport',
      data: {
        content: 'Thank you for all the birtday wishes',
      },
    },
    {
      id: 0,
      type: 'img',
      likes: 1,
      user: 'John Smith',
      data: {
        caption: 'Do you like this cute pup?',
        link: 'http://i.imgur.com/XsaLqi1.jpg',
      },
    },
  ],

  mutations: {
    [types.FEED__UNSHIFT_FEED](localState, payload) {
      payload.id = localState[0].id + 1 //eslint-disable-line
      localState.unshift(payload);
    },
    // [types.FEED__MUTATE_LIKES](localState, payload) {
    //   localState[localState.length - 1 - payload.id].likes += 1; //eslint-disable-line
    // },
  },

  actions: {
    [types.FEED__POST_NEW]({ commit }, payload) {
      let newObj = {};
      if (payload.type === 'txt') {
        newObj = {
          type: 'txt',
          likes: 0,
          user: payload.user,
          data: {
            content: payload.content,
          },
        };
      }
      commit(types.FEED__UNSHIFT_FEED, newObj);
    },
    // [types.FEED__ADD_LIKE]({ commit }, payload) {
    //   commit(types.FEED__MUTATE_LIKES, payload);
    // },
  },
};

export default userModule;
