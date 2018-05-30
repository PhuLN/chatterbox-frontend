<template>
  <div>
    <input type="text" name="" id="msg-box" class="input" v-model="message">
    <input type="button" value="Send" class="button is-primary" @click="sendMessage">
  </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.message) {
        this.$socket.emit('sendMessage', {
          author: this.$store.getters.getUser,
          text: this.message,
          timestamp: Date.now(),
        });
        this.$store.dispatch('sendMessage', {
          chatId: this.$store.getters.getCurrentChat._id,
          text: this.message,
        });
      }
    },
  },
};
</script>

<style scoped>
#msg-box {
  max-width: 75%;
}
</style>
