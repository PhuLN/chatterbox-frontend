<template>
  <div class="grid-wrapper">
    <div class="top-menu">
      <TopMenu />
    </div>
    <div class="left-menu">
      <LeftMenu />
    </div>
    <div class="main-section box is-radiusless">
      <ChatMessage v-for="message in chatMessages" :key="message._id" :message="message" />
    </div>
    <div class="right-menu">
      <RightMenu v-if="hasSelectedChat" />
    </div>
    <div class="lower-menu">
      <ChatBox v-if="hasSelectedChat" />
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/chat/structure/TopMenu';
import RightMenu from '@/components/chat/structure/RightMenu';
import LeftMenu from '@/components/chat/structure/LeftMenu';
import ChatMessage from '@/components/chat/Message';
import ChatBox from '@/components/chat/ChatBox';

import _ from 'lodash';

export default {
  components: {
    TopMenu,
    RightMenu,
    LeftMenu,
    ChatMessage,
    ChatBox,
  },
  mounted() {
    this.$store.dispatch('fetchAccessibleChats');
  },
  computed: {
    chatMessages() {
      return this.$store.getters.getMessages;
    },
    hasSelectedChat() {
      return !_.isEmpty(this.$store.getters.getCurrentChat);
    },
    users() {
      return this.$store.getters.getMembers;
    },
  },
  sockets: {
    newMessage(msg) {
      this.$store.dispatch('receiveMessage', msg).then(() => {
        const container = this.$el.querySelector('.main-section');
        container.scrollTop = container.scrollHeight;
      });
    },
    newUserJoined() {
      this.$store.dispatch('fetchChatMembers');
    },
  },
};
</script>


<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5vh 85vh 10vh;
}
.top-menu {
  grid-column: span 12;
  background-color: #202225;
}
.left-menu {
  grid-column: span 2;
  background-color: #292B30;
}
.main-section {
  grid-column: span 8;
  background-color: #36393E;
  height:100%;
  overflow-y:auto;
}
.right-menu {
  grid-column: span 2;
  background-color: #292B30;
}
.lower-menu {
  grid-column: span 12;
  background-color: #202225;
}
</style>
