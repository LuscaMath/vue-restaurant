<template>
    <HeaderPage></HeaderPage>
    <h1>Hello add</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'AddRestaurant',
    components: {
        HeaderPage
    },

    data() {
        return {
            userName: ''
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info')
        let userData = JSON.parse(user)

        if (!user) {
            this.$router.push({ name: "SignUp" })
        } else {
            this.userName = userData[0].nome
        }
    }
}
</script>

<style></style>