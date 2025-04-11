<script setup>
import Shortcut from './Shortcut.vue'
</script>

<template>
    <p>Hello World!</p>
    <Shortcut title="About" link="/about" description="about"></Shortcut>
    <!-- <Shortcut title="My Projects" link="/myprojects" description="list of my fabulous(useless) works"></Shortcut> -->
    <Shortcut title="RNG" link="/rng" description="random number generator"></Shortcut>
    <Shortcut title="Word Counter" link="/wordcount" description="count your words"></Shortcut>
    <Shortcut title="24 Solver" link="/solve24" description="solve the 24 game"></Shortcut>
    <Shortcut title="Play 24" link="/play24" description="play the 24 game, guarantees that it has at least 1 solution"></Shortcut>
    <Shortcut title="Number Factorization" link="/factor" description="factor a number"></Shortcut>
    <Shortcut title="Clock" link="/clock" description="a random time teller"></Shortcut>
    <Shortcut title="4k Game" link="/4k" description="4 keys mania"></Shortcut>
</template>

<style scoped>

</style>