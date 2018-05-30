/* eslint-disable no-shadow */

import axios from 'axios';
import store from './index';

const state = {
  currentChat: {},
  currentChatMembers: [],
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
  setCurrentChat({ commit }, chat) {
    commit('setCurrentChat', chat);
  },
  fetchAccessibleChats({ commit }) {
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
  },
  fetchChatMembers({ commit }) {
    return axios.get(`${process.env.API_URL}/chatrooms/chatmembers`, {
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Token: store.getters.getToken,
      },
      params: {
        chatId: store.getters.getCurrentChat._id,
      },
    }).then((response) => {
      commit('setMembers', response);
    });
  }
};

const mutations = {
  setCurrentChat(state, chat) {
    state.currentChat = chat;
  },
  setAccessibleChats(state, response) {
    state.accessibleChats = response.data;
  },
  setMembers(state, members) {
    state.currentChatMembers = members.data;
  },
};

const getters = {
  getCurrentChat: state => state.currentChat,
  getAccessibleChats: state => state.accessibleChats,
  getMembers: state => state.currentChatMembers,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
