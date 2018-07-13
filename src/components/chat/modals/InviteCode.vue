<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Invite members to chat with</p>
      </header>

      <section class="modal-card-body has-text-centered">
        <div v-if="!receivedCode" >
          <div class="field">
            <p class="is-size-3 invitetxt" @click="generateInviteCode">
              Click here to get an invite code
            </p>
          </div>
          <div class="field">
            <b-checkbox v-model="isSingleUse">I want this code to be single use</b-checkbox>
          </div>
        </div>
        <input type="text" class="input inviteinput" v-else v-model="code">
        <hr />
        <p>
          Invited users have to enter the code to gain access to the chat
        </p>
        <p>
          To do so, they must click on "Join group" and enter the code
        </p>
      </section>
    </div>
  </form>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import axios from 'axios';

export default {
  data() {
    return {
      code: '',
      receivedCode: false,
      isSingleUse: false,
    };
  },
  methods: {
    generateInviteCode() {
      axios({
        method: 'POST',
        url: `${process.env.API_URL}/invite/create`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        headers: {
          Token: this.$store.getters.getToken,
        },
        data: {
          chatId: this.$store.getters.getCurrentChat._id,
          isSingleUse: this.isSingleUse,
        },
      }).then((response) => {
        this.code = response.data.code;
        this.receivedCode = true;
      });
    },
  },
};
</script>

<style scoped>
.invitetxt {
  cursor: pointer;
}
.inviteinput {
  max-width: 70%;
}
</style>
