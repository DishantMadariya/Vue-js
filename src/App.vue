<template>
    <teleport to="#portal">
        <PortalC />
    </teleport>
</template>

<script>
import PortalC from './components/Portal'
export default {
    name: 'App',
    components: {
        PortalC
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
