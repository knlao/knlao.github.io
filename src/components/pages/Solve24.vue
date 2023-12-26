<script setup>
import { ref } from 'vue';
import solve24 from './../functions/24game-solver/solve24';
const a = ref(1);
const b = ref(2);
const c = ref(3);
const d = ref(4);

const result = ref();

</script>

<template>
    <input v-model.number="a" />
    <input v-model.number="b" />
    <input v-model.number="c" />
    <input v-model.number="d" />
    <br><br>
    <button @click="() => {
        console.log([a, b, c, d]);
        result = solve24([a, b, c, d], 24);
    }">Solve</button>
    <br>
    <li v-for="item in result">
        {{ item }}
    </li>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>