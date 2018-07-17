<template>
  <div>
    <input type="text" name="" id="msg-box" class="input" v-model="message"
    @keyup.enter="sendMessage">
    <input type="button" value="Send" class="button is-primary" @click="sendMessage">
  </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

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
          author: this.$store.getters.getUser._id,
          message: this.message,
          createdAt: new Date(Date.now()).toISOString(),
        });
        this.$store.dispatch('sendMessage', {
          chatId: this.$store.getters.getCurrentChat._id,
          text: this.message,
        });
        this.message = '';
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
