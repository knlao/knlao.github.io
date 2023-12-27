<script setup>
import { ref } from 'vue';
import solve24 from './../functions/24game-solver/solve24';
const a = ref(1);
const b = ref(2);
const c = ref(3);
const d = ref(4);

const result = ref([]);

</script>

<template>
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />
    <input type="number" v-model.number="c" />
    <input type="number" v-model.number="d" />
    <button @click="() => {
        console.log([a, b, c, d]);
        result = solve24([a, b, c, d], 24);
    }">Solve</button>
    <br>
    <div v-if="result.length === 0">
        <p>No results.</p>
    </div>
    <div v-else>
        <p>{{ result.length }} results.</p>
        <li v-for="item in result">
            {{ item }}
        </li>
    </div>
</template>

<style scoped>
input {
    height: 1.5rem;
    width: 5rem;
    margin: 0.5rem;
    font-size: 1em;
    text-align: justify;
    border-radius: 0.5rem;
}

li {
  list-style: none;
  margin: 0.5rem;
}

p {
  margin: 0.5rem;
  font-weight: bold;
}
</style>