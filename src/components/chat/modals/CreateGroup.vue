<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Create a new chat room</p>
      </header>

      <section class="modal-card-body">
        <b-field label="Name">
          <b-input
            v-model="roomName"
            placeholder="Chatroom name"
            required>
          </b-input>
        </b-field>

        <b-field label="Description">
          <b-input
            v-model="roomDesc"
            placeholder="Chatroom description"
            required>
          </b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <input type="button" class="button" value="Close" @click="$parent.close()">
        <input type="button" class="button is-primary" value="Create" @click="CreateChatroom()" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      roomName: '',
      roomDesc: '',
    };
  },
  methods: {
    CreateChatroom() {
      this.$store.dispatch('createChatroom', {
        name: this.roomName,
        description: this.roomDesc,
      }).then(() => {
        this.$parent.close();
      });
    },
  },
};
</script>

