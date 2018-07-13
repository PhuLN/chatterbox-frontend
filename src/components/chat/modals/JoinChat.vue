<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Invite members to chat with</p>
      </header>

      <section class="modal-card-body has-text-centered">
        <div class="field">
          <p>Enter invite code</p>
          <input class="input" type="text" v-model="code">
        </div>
        <div class="field">
          <input type="button" value="Join" class="button is-primary" @click="joinChat">
        </div>
      </section>
    </div>
  </form>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

export default {
  data() {
    return {
      code: '',
    };
  },
  methods: {
    joinChat() {
      this.$store.dispatch('joinChatroom', this.code).then(() => {
        this.$parent.close();
      }).catch((e) => {
        this.$toast.open({
          message: e.response.data.error,
          type: 'is-danger',
          queue: false,
          duration: 3000,
          position: 'is-bottom-right',
        });
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
