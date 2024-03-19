<template>
    <div>
        <h2>Component C</h2>
        <ComponentE />
    </div>
</template>

<script>
import  ComponentE  from './ComponentE.vue'
    export default {
        components: { ComponentE },
        name: 'ComponentC',
    }
</script>

<style scoped>

</style>