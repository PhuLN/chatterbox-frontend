<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $primary: #00C4A7;
  $primary-invert: findColorInvert($primary);
  $colors: (
    "primary": ($primary, $primary-invert)
  );

  #app {
    font-family: "Segoe UI",Roboto,Oxygen,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
