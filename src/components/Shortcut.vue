<script setup>
const props = defineProps(['title', 'link', 'description'])

</script>

<template>
<div class="box">
    <h3>{{ title }} <router-link :to="{ path: link }">{{link}}</router-link></h3>
    <p>{{ description }}</p>
    
</div>    
</template>

<style scoped>
.box {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
h3 {
    margin: 0;
    padding: 0;
}
p {
    margin: 0;
    padding: 0;
}
</style>