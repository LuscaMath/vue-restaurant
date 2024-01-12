<template>
    <HeaderPage></HeaderPage>
    <h1>Hello User</h1>
</template>

<script>
    import HeaderPage from './HeaderPage.vue';
    export default {
        name:'HomePage',
        components:{
            HeaderPage
        },
        mounted() {
            let user = localStorage.getItem('user-info')
            if(!user) {
                this.$router.push({name:"SignUp"})
            }
        }
    }
</script>

<style>
</style>