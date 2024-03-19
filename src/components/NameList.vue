<template>
    <div>
        <h3 v-for="name in names" :key="name.firstname">
            <slot :firstname="name.firstname" :lastname="name.lastname"></slot>
        </h3>
    </div>
</template>

<script>
    export default {
        name : 'NameList',
        data(){
            return {
                names :[
                    {
                        firstname : 'Dishant',
                        lastname : 'Madariya'
                    },
                    {
                        firstname : 'Kishan',
                        lastname : 'Mangukiya'
                    },
                    {
                        firstname : 'Dishant',
                        lastname : 'Madariya'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>