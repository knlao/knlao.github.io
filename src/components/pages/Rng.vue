<script setup>
import { ref } from 'vue'
const minNum = ref(1)
const maxNum = ref(10)
const num = ref(0);
</script>

<template>
    <p>Min: <input :value="minNum" /></p>
    <p>Max: <input :value="maxNum" /></p>
    <button @click="()=>{num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)}">Generate</button>
    <h3>Number: {{ num }}</h3>
</template>

<style scoped>
</style>