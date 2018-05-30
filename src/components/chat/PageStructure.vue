<template>
  <div class="grid-wrapper">
    <div class="top-menu">
      <TopMenu />
    </div>
    <div class="left-menu"></div>
    <div class="main-section box is-radiusless">
      <ChatMessage v-for="message in chatMessages" :key="message._id" :message="message" />
    </div>
    <div class="right-menu">
      <ul>
        <li class="has-text-white" v-for="user in users" :key="user._id">{{ user.username }}</li>
      </ul>
    </div>
    <div class="lower-menu">
      <ChatBox v-if="hasSelectedChat" />
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/chat/TopMenu';
import ChatMessage from '@/components/chat/Message';
import ChatBox from '@/components/chat/ChatBox';

export default {
  components: {
    TopMenu,
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
      this.$store.dispatch('receiveMessage', msg);
    }
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
  overflow-y:scroll;
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
