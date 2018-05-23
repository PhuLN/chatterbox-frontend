<template>
  <div>
    <input type="text" name="" id="msg-box" class="input" v-model="message">
    <input type="button" value="Send" class="button is-primary" @click="send">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    send() {
      axios({
        method: 'POST',
        url: `${process.env.API_URL}/chatrooms/testmsg`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: {
          message: this.message,
        },
      });
    },
  },
  sockets: {
    send(val) {
      alert(val);
    },
  },
};
</script>

<style scoped>
#msg-box {
  max-width: 75%;
}
</style>
