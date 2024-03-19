<template>
    <div>
        <h2>Tab C Component</h2>
        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        name : 'TabC',
        data(){
            return {
                name :''
            }
        }
    }
</script>

<style scoped>

</style>