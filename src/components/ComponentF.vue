<template>
    <div>
        <h2>Component f</h2>
        <h3>Component f {{ username }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'ComponentF',
        inject :['username'],
    }
</script>

<style scoped>

</style>