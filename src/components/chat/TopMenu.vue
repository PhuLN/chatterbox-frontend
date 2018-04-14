<template>
  <div class="has-text-centered connectedAsHeader">
    <input id="burger" type="checkbox" v-model="topMenuIsActive" />
    <label for="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav :class="{ overflowY: topMenuIsActive }">
      <div class="container" style="margin-top: 50px; display: flex; justify-content: center">
        <div class="column is-5">
          <Group />
          <Group />
          <Group />
          <Group />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Group from '@/components/chat/GroupCard';

export default {
  components: {
    Group,
  },
  data() {
    return {
      topMenuIsActive: false,
    };
  },
};
</script>

<style>
  .overflowY {
    overflow-y: auto;
  }
  body input + label {
    position: fixed;
    top: 12px;
    left: 20px;
    height: 20px;
    width: 15px;
    z-index: 5;
  }
  body input + label span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    display: block;
    background: whitesmoke;
    transition: .5s;
  }
  body input + label span:first-child {
    top: 4px;
  }
  body input + label span:last-child {
    top: 16px;
  }
  body label:hover {
    cursor: pointer;
  }
  body input:checked + label span {
    opacity: 0;
    top: 50%;
  }
  body input:checked + label span:first-child {
    opacity: 1;
    transform: rotate(405deg);
  }
  body input:checked + label span:last-child {
    opacity: 1;
    transform: rotate(-405deg);
  }
  body input ~ nav {
    background: #202225;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    z-index: 3;
    transition: .5s;
    overflow: hidden;
  }
  body input ~ nav > ul {
    text-align: center;
    position: absolute;
    top: 35%;
    left: 20%;
    right: 20%;
  }
  body input ~ nav > ul > li {
    display: none;
    transition: .5s;
    transition-delay: 0s;
  }
  body input:checked ~ nav {
    height: 100%;
    transition-delay: 0s;
  }
  body input:checked ~ nav > ul > li {
    display: block;
    opacity: 1;
    transition-delay: .5s;
  }
</style>
