<script setup>
import { ref, computed } from 'vue';
// import { useRouter } from 'vue-router'
// const router = useRouter()
</script>

<template>
  <router-link :to="{ name: 'Home' }">Home</router-link> |
  <router-link :to="{ name: 'About' }">About</router-link>
  <div class="separator"></div>
  <router-view></router-view>
</template>

<style scoped>
.separator {
  height: 0;
  border: 0.05rem solid;
  margin-top: 0.5rem;
  border-radius: 99px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
