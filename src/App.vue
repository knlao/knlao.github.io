<script setup>
import { ref, computed } from 'vue';
// import { useRouter } from 'vue-router'
// const router = useRouter()
</script>

<template>
  <div class="main">
    <router-link class="item" :to="{ name: 'Home' }">Home</router-link> |
    <router-link class="item" :to="{ name: 'About' }">About</router-link>

    <div class="dropdown item">
      <router-link class="dropbtn" :to="{ name: 'Tools' }">Tools</router-link>
      <div class="dropdown-content">
        <router-link :to="{ name: 'WordCount' }">Word Counter</router-link>
        <router-link :to="{ name: 'Factor' }">Factorization</router-link>
        <router-link :to="{ name: 'Solve24' }">Play 24 Solver</router-link>
      </div>
    </div>

        <div class="dropdown item">
      <router-link class="dropbtn" :to="{ name: 'Fun' }">Fun</router-link>
      <div class="dropdown-content">
        <router-link :to="{ name: 'Play24' }">Play 24</router-link>
        <router-link :to="{ name: 'FourKeys' }">4k Mania</router-link>
      </div>
    </div>
    
    <div class="separator"></div>
    
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  max-width: 600px;
  margin: auto;
}

.separator {
  height: 0;
  border: 0.05rem solid;
  margin-top: 0.5rem;
  border-radius: 99px;
}

.item {
  margin: 0 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #eee;
  min-width: 160px;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  z-index: 1;
}

.dropdown-content a {
  padding: 8px 10px;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
