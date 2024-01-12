<template>
    <HeaderPage></HeaderPage>
    <h1>Hello {{ userName }}</h1>
    <form class="add-restaurant">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Digite o nome do restaurante">
        <input type="text"  name="contact" v-model="restaurant.number" placeholder="Digite o número">
        <input type="text"  name="address" v-model="restaurant.address" placeholder="Digite o endereço">
        <button type="button" @click="addRestaurant">Adicionar</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'AddRestaurant',
    components: {
        HeaderPage
    },

    data() {
        return {
            userName: '',
            restaurant :{
                name: '',
                number: '',
                address: '',
            }
        }
    },

    methods: {
        async addRestaurant() {
            const result = await axios.post('http://localhost:3000/restaurants', {
                name:this.restaurant.name,
                contact:this.restaurant.number,
                address:this.restaurant.address
            })
            if(result.status==201) {
                this.$router.push({name:"HomePage"})
            }
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