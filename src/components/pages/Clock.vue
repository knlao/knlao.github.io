<script setup>
import { ref } from 'vue';

const date = ref(new Date())

const styles = ref("hh:mm:ss");

setInterval(() => {
    date.value = new Date();
}, 1000);

//https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/

</script>

<template>
    <p>{{ date }}</p>
</template>

<style scoped>

</style>