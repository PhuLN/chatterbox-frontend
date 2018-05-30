import Vue from 'vue';
import Vuex from 'vuex';
import persist from 'vuex-persistedstate';

import auth from './auth.module';
import chatroom from './chatroom.module';
import chat from './chat.module';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [persist()],
  modules: {
    auth,
    chatroom,
    chat,
  },
});
