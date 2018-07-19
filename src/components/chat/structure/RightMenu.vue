<template>
  <div>
    <h1 class="has-text-white is-size-3">Members</h1>
    <hr class="right-divider" />
    <ul>
      <li class="has-text-white" v-for="user in users" :key="user._id">{{ user.username }}</li>
    </ul>
    <hr class="right-divider" />
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

<style>
.right-divider {
  width: 90%;
  margin: 10px auto 10px auto;
  border-top: whitesmoke 1px solid;
  box-shadow: 0px 0px 2px 1px rgba(61,61,61,1);
}
</style>
