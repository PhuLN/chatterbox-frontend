/* eslint-disable no-shadow */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import axios from 'axios';
import store from './index';

const state = {
  messages: [],
};

const actions = {
  sendMessage({ commit }, message) {
    return axios({
      method: 'POST',
      url: `${process.env.API_URL}/chat/create`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Token: store.getters.getToken,
      },
      data: {
        message,
      },
    }).then(() => {
      commit('nothing');
    });
  },
  receiveMessage({ commit }, message) {
    commit('addNewMessage', message);
  },
  clearMessages({ commit }) {
    commit('clearMessages');
  },
  fetchMessagesInChat({ commit }) {
    return axios.get(`${process.env.API_URL}/chat/chatmessages`, {
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Token: store.getters.getToken,
      },
      params: {
        chatId: store.getters.getCurrentChat._id,
      },
    }).then((response) => {
      commit('setMessages', response);
    });
  },
};

const mutations = {
  setMessages(state, response) {
    state.messages = response.data;
  },
  addNewMessage(state, message) {
    state.messages.push(message);
  },
  clearMessages(state) {
    state.messages = [];
  },
  nothing() {
    // Literally nothing
  },
};

const getters = {
  getMessages: state => state.messages,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
