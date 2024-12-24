<script setup>
import { ref } from 'vue'
import InfoBox from './../InfoBox.vue'
const e = ref(1)
</script>

<template>
    <h3>List of my projects</h3>
    <InfoBox title="Auto Clicker" link="https://github.com/knlao/AutoClicker/releases/tag/release">
        Written in Java
    </InfoBox>
</template>

<style scoped>
</style>