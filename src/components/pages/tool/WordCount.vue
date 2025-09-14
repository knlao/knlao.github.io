<script setup>
import { ref } from 'vue';
const text = ref("Your text here")

</script>

<template>
    <textarea :value="text" @input="event => text = event.target.value" @focus="$event.target.select()" rows="10" cols="80"></textarea>
    <p>Word Count: {{ text === "" ? 0 : text.match(/[\u00ff-\uffff]|\S+/g).length }}</p>
    <p>Character Count: {{ (text==='' ? 0 : text.length) }}</p>
</template>

<style scoped>
textarea {
    margin-top: 1rem;
}
</style>