<script setup>
import Shortcut from './Shortcut.vue'
</script>

<template>
    <p>Hello World!</p>
    <Shortcut title="About" link="/about" description="about"></Shortcut>
    <Shortcut title="RNG" link="/rng" description="random number generator"></Shortcut>
    <Shortcut title="Word Counter" link="/wordcount" description="count your words"></Shortcut>
    <Shortcut title="24 Solver" link="/solve24" description="solve the 24 game"></Shortcut>
    <Shortcut title="Play 24" link="/play24" description="play the 24 game, guarantees that it has at least 1 solution"></Shortcut>
</template>

<style scoped>

</style>