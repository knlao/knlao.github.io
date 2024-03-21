<script setup>
import { ref } from 'vue'
import rng from './../functions/rng'
const minNum = ref(1)
const maxNum = ref(10)
const num = ref(0);
</script>

<template>
    <p>Min: <input type="number" v-model="minNum" /></p>
    <p>Max: <input type="number" v-model="maxNum" /></p>
    <button @click="()=>{num = rng(minNum, maxNum)}">Generate</button>
    <h3>Number: {{ num }}</h3>
</template>

<style scoped>
</style>