<template>
  <div>
    <p class="has-text-white">Members</p>
    <ul>
      <li class="has-text-white" v-for="user in users" :key="user._id">{{ user.username }}</li>
    </ul>
    <input type="button" value="Invite" class="button
    is-primary" @click="launchInviteGenerator">
  </div>
</template>

<script>
import Invite from '@/components/chat/modals/InviteCode';

export default {
  components: {
    Invite,
  },
  methods: {
    launchInviteGenerator() {
      this.$modal.open({
        component: Invite,
        parent: this,
      });
    },
  },
  computed: {
    users() {
      return this.$store.getters.getMembers;
    },
  },
};
</script>
