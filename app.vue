<template>
    <div>어서오고</div>
    {{ count }}
    <button @click="count++">+1</button>
</template>

<script setup>
const count = ref(0);
</script>
