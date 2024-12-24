<script setup>
const props = defineProps(['title', 'link'])

</script>

<template>
<div class="box">
    <h3>{{ title }} <a :href=link>{{link}}</a></h3>
    <p><slot></slot></p>
    
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