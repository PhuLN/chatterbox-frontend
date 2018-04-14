<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <LoginForm />
        </div>
      </div>
    </div>

    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </section>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
  .hero.is-success {
    background: #1B1B24;
  }

  .cube {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 15vw;
    top: 10vh;
    border: solid 1px #343647;
    transform: scale(0) rotate(0deg);
    animation: cube 12s ease-in forwards infinite;
  }
  .cube:nth-child(2n) {
    border: solid 1px #2A2C3A;
  }
  .cube:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  .cube:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  .cube:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  .cube:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  .cube:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
  .cube:nth-child(7) {
    animation-delay: 12s;
    left: 80vw;
    top: 75vh;
  }

  @keyframes cube {
    from {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: scale(20) rotate(960deg);
      opacity: 0;
    }
  }
</style>
