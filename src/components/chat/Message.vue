<template>
    <div>
      <div class="chatMessage text-left">
        <div class="msg-info">
          <figure class="image is-48x48">
            <img :src="author.profileImage" alt="" class="round-image">
          </figure>
          <div>
            <p class="author is-size-4 has-text-white-ter">{{ author.username }}</p>
            <p class="has-text-grey is-size-7">{{ readableTime }}</p>
          </div>
        </div>
        <div>
          <p class="has-text-white-ter chat-message">
            {{ message.message }}
          </p>
        </div>
      </div>
      <hr class="message-divider" />
    </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import _ from 'lodash';

export default {
  props: ['message'],
  computed: {
    author() {
      return _.find(this.$store.getters.getMembers, member => member._id === this.message.author);
    },
    readableTime() {
      const timestamp = new Date(this.message.createdAt);
      const date = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
      const hours = timestamp.getHours() + 1;
      const minutes = timestamp.getMinutes() + 1;
      return `${date} - ${hours}:${minutes.toString().padStart(2, 0)}`;
    },
  },
};
</script>

<style scoped>
  .chatMessage {
    word-wrap: break-word;
    overflow: hidden;
  }
  .msg-info {
    display: flex;
    align-items: center;
  }

  .msg-info div {
    margin-left: 10px;
  }
  .round-image {
    border-radius: 100%;
  }
  .chat-message {
    color: hsl(0, 0%, 75%);
  }
  .message-divider {
    border: 0;
    border-top: #5A636A 1px solid;
    box-shadow: 0px 0px 2px 1px rgba(61,61,61,1);
    height: 0;
  }
  .text-left {
    text-align: left;
  }
</style>
