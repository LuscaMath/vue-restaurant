<template>
    <HeaderPage></HeaderPage>
    <h1>Hello {{ userName }}</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'HomePage',
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
        console.log(user)

        if (!user) {
            this.$router.push({ name: "SignUp" })
        } else {
            user = JSON.parse(user);

            this.userName = user[0].nome;
        }
    }
}
</script>

<style></style>