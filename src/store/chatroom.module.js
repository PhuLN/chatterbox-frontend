/* eslint-disable no-shadow */

import axios from 'axios';
import store from './index';

const state = {
  currentChat: {
    details: {},
    messages: {},
  },
  accessibleChats: [],
};

const actions = {
  createChatroom({ commit }, chat) {
    return axios({
      method: 'POST',
      url: `${process.env.API_URL}/chatrooms/create`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Token: store.getters.getToken,
      },
      data: {
        chat,
      },
    }).then((response) => {
      commit('setCurrentChat', response);
    });
  },
  fetchAccessibleChats({commit}) {
    return axios({
      method: 'GET',
      url: `${process.env.API_URL}/chatrooms/yourchats`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Token: store.getters.getToken,
      },
    }).then((response) => {
      commit('setAccessibleChats', response);
    });
  }
};

const mutations = {
  setCurrentChat(state, response) {
    state.currentChat = response.data;
    state.accessibleChats.push(response.data);
  },
  setAccessibleChats(state, response) {
    console.log(response.data);
    state.accessibleChats = response.data;
  }
};

const getters = {
  getCurrentChat: state => state.currentChat,
  getAccessibleChats: state => state.accessibleChats,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
