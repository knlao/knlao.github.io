<script setup>
import { ref, onMounted } from 'vue';
import rng from './../../functions/rng'

const keys = ref("dfjk");
const m = ref([]);
const ss = ref(true);
const ssrate = ref(0.10);

const bad = ref(false);

const perfect = ref(0);
const miss = ref(0);
const combo = ref(0);

const generatemap = (n, f) => {
    if (f) {
        m.value = [rng(1, keys.value.length)];
    }
    if (!ss.value) ssrate.value = 0;
    for (let i = (f ? 1 : 0); i < n; i++) {
        if (Math.random() < ssrate.value) {
            m.value.push(m.value.at(-1))
        } else {
            let j = m.value.at(-1);
            let x = rng(1, keys.value.length-1);
            m.value.push((x < j ? x : x+1));
        }
    }
}

const scrollgame = () => {
    document.querySelectorAll("tr").forEach(x=>x.classList.add("scroll"))
    setTimeout(() => {
        document.querySelectorAll("tr").forEach(x=>x.classList.remove("scroll"))
    }, "100");
}

const keyclicked = (k) => {
    if (keys.value.indexOf(k)+1 === m.value[0]) {
        bad.value = false;
        generatemap(1, false);
        scrollgame();
        m.value.shift();
        perfect.value++;
        combo.value++;
    } else {
        bad.value = true;
        miss.value++;
        combo.value = 0;
    }
}

window.addEventListener("keydown", (e) => {
    const k = e.key;
    if (keys.value.includes(k)) {
        keyclicked(k);
    }
});

const reset = () => {
    perfect.value = 0;
    miss.value = 0;
    combo.value = 0;
    generatemap(10, true);
}

const sschanged = () => {
    ssrate.value = (ss.value ? 0.1 : 0);
}

onMounted(() => {
    generatemap(10, true);
})

</script>

<template>

    <br>
    <div class="window">
        <div class="infobox">
            <p>Perfect: {{ perfect }}</p>
            <p>Miss: {{ miss }}</p>
            <p>Combo: {{ combo }}</p>
        </div>
        <div class="gameframe" :class="[bad ? 'wrong' : 'normal']">
            <table class="game" :class="[bad ? 'wrong' : 'normal']">
                <tr v-for="t in m.slice().reverse()">
                    <td v-for="n in keys.length" :class="[t === n ? 'key' : 'none', bad ? 'wrong' : 'normal']" @click="keyclicked(keys[n-1])"></td>
                </tr>
            </table>
        </div>
        <div class="infobox">
            <p>config</p>
            keys: <input v-model="keys" />
            <div class="s"></div>
            streams?: <input type="checkbox" v-model="ss" @change="sschanged()"/>
            <div class="s"></div>
            stream rate: <input v-model="ssrate" :disabled="ss ? disabled : ''" />
            <div class="s"></div>
            <div class="s"></div>
            <button @click="reset()">reset</button>
        </div>
    </div>

</template>

<style scoped>

.window {
    display: flex;
    justify-content: center;
    width: auto;
}

.game {
    margin: auto;
}

.infobox {
    width: 200px;
    padding: 25px;
    border: gray solid 1px;
}

.s {
    margin-top: 10px;
}

.normal {
    background-color: none;
}

/* .wrong {
    background-color: lightpink;
} */

table {
    border: gray solid 1px;
    border-spacing: 0px 10px;
    overflow: hidden;
}

td {
    width: 100px;
    height: 60px;
    border-top: lightgray solid 1px;
    border-bottom: lightgray solid 1px;
    border-collapse: collapse;
    text-align: center;
    vertical-align: center;
}

td.none {
    background-color: none;
}

td.key {
    background-color: lightblue;
}

td.key.wrong {
    background-color: lightpink;
}

.scroll {
    animation: 0.05s ease-in-out scrolldown forwards;
}

@keyframes scrolldown {
    from {
        transform: translate(0, -60px);
    }
    to {
        transform: translate(0, 0px);
    }
}

</style>