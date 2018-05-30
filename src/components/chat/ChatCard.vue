<template>
  <div class="box groupbox group-layout" @click="joinChat">
    <div style="display: flex;">
      <figure class="image is-48x48">
        <img :src="chatDetails.roomImage" alt="" class="round-image">
      </figure>
      <p class="has-text-grey has-text-left" style="align-self: center; margin-left: 5px;">
        <span class="is-size-4 has-text-grey">{{ chatDetails.roomName }}</span>
      </p>
    </div>
    <div style="margin: 5px 0;">
      <p class="has-text-grey has-text-left">
        {{ chatDetails.roomDescription }}
      </p>
    </div>
    <div class="group-footer">
      <p class="has-text-grey has-text-right">
        <span class="icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </span>
        5/16 Online
      </p>
    </div>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

export default {
  props: ['chatDetails'],
  methods: {
    joinChat() {
      this.$store.dispatch('setCurrentChat', this.chatDetails);
      this.$store.dispatch('clearMessages');
      this.$store.dispatch('fetchMessagesInChat');
      this.$store.dispatch('fetchChatMembers');
      this.$socket.emit('attemptJoinChat', this.chatDetails.roomName);
    },
  },
};
</script>


<style scoped>
  .round-image {
    border-radius: 100%;
  }
  .groupbox {
    transition: all .2s ease-in-out;
    cursor: pointer;
    border-left: 5px solid #3FA3F4;
  }
  .groupbox:hover {
    transform: scale(1.1);
  }
  .group-hr {
    background-color: #dbdbdb;
    border: none;
    height: 1px;
    margin: 0.5rem 0;
  }

  .group-footer {
    background: hsl(5%, 0%, 0%);
    align-self: flex-end;
  }

  .group-layout {
    display: grid;
  }
</style>
