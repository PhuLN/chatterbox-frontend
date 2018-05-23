/* eslint-disable no-shadow */

import axios from 'axios';

const state = {
  user: {},
};

const getters = {
  getToken: state => state.user.token,
  isAuthenticated: state => !!state.user.token
};

const actions = {
  userSignup({ commit }, user) {
    return axios({
      method: 'POST',
      url: `${process.env.API_URL}/users/signup`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: {
        user,
      },
    }).then((res) => {
      commit('setLoginDetails', res.data);
    });
  },

  userLogin({ commit }, user) {
    return axios({
      method: 'POST',
      url: `${process.env.API_URL}/users/login`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: {
        user,
      },
    }).then((res) => {
      commit('setLoginDetails', res.data);
    });
  },
};

const mutations = {
  setLoginDetails(state, { user }) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
