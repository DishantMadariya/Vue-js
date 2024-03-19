<template>
    <div>
        <h2>Pop up Component</h2>
        <button @click="$emit('close')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name : 'PopupC',
        emits :['close']
    }
</script>

<style scoped>

</style>