<script setup>
import { ref, onMounted } from 'vue';
import solve24 from './../functions/24game-solver/solve24';
import rng from './../functions/rng'
const a = ref(0);
const b = ref(0);
const c = ref(0);
const d = ref(0);

const result = ref([]);

const showAns = ref(false);

const generate = () => {
    showAns.value = false;
    result.value = [];

    while (result.value.length === 0) {
        a.value = rng(1, 13);
        b.value = rng(1, 13);
        c.value = rng(1, 13);
        d.value = rng(1, 13);
        result.value = solve24([a.value, b.value, c.value, d.value], 24);
    }
    console.log([a.value, b.value, c.value, d.value]);
}

onMounted(() => {
    generate();
})
</script>

<template>
    <div class="container">
        <div class="container">
            <p class="card">{{ a }}</p>
            <p class="card">{{ b }}</p>
        </div>
        <div class="container">
            <p class="card">{{ c }}</p>
            <p class="card">{{ d }}</p>
        </div>
    </div>
    <button @click="showAns = !showAns;">Show Answer</button>
    <button @click="generate">Generate New</button>
    <br>
    <div v-show="showAns">
        <p class="info">{{ result.length }} results.</p>
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

.info {
  margin: 0.5rem;
  font-weight: bold;
}

.container {
    display: flex;
    flex-wrap: wrap;
}
.card {
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

button {
    margin: 0.5rem;
}
</style>