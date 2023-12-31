<script setup>
import { ref, onMounted } from 'vue';
import { factors, primeFactors, primeFactorsCount } from './../functions/factor';
const num = ref(2024);
const f = ref([]);
const pf = ref([]);
const pfc = ref([]);
const n = ref(0);

const calc = () => {
    if (num.value <= 0) {
        alert("number must be a positive integer");
        return;
    }
    if (num.value >= 10000000000000) {
        if (!confirm("The number might too large, it might take some time to compute.\nAre you sure you want to continue?")) {
            return; 
        }
    }
    f.value = factors(num.value);
    pf.value = primeFactors(num.value);
    pfc.value = primeFactorsCount(pf.value);
    n.value = num.value;
};

onMounted(() => {
    calc();
})
</script>

<template>
    <p>Number: <input type="number" v-model="num" /></p>
    <button @click="calc">Factorize</button>
    <h3>Prime?: {{ (f.length === 0 ? "" : (f.length === 2 ? "yes" : "no")) }}</h3>
    <h3>Factors: {{ f }}</h3>
    <h3>Prime factors: {{ pf }}</h3>
    <h3>{{ n }} = <span v-for="exponent, base, idx in pfc">{{ idx === 0 ? "" : " × " }}{{ base }}<span class="power" v-if="exponent !== 1">{{ exponent }}</span></span></h3>
</template>

<style scoped>
.power {
    font-size: 80%;
    vertical-align: top;
}
</style>