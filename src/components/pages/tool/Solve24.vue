<script setup>
import { ref } from 'vue';
import solve24 from './../../functions/24game-solver/solve24';
const a = ref(1);
const b = ref(2);
const c = ref(3);
const d = ref(4);

const result = ref([]);

</script>

<template>
    <div class="container">
        <input type="number" class="card" v-model.number="a" @focus="$event.target.select()" />
        <input type="number" class="card" v-model.number="b" @focus="$event.target.select()" />
        <input type="number" class="card" v-model.number="c" @focus="$event.target.select()" />
        <input type="number" class="card" v-model.number="d" @focus="$event.target.select()" />
    </div>
    <button class="btn" @click="() => {
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

.container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    text-align: center;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    margin: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    height: 5.5rem;
    width: 4rem;
    box-sizing: border-box;
}

.btn {
    margin: 0.5rem;
    width: 19rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

