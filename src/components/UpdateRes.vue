<template>
    <HeaderPage></HeaderPage>
    <h1>Hello {{ userName }}</h1>
    <form class="add-restaurant">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Digite o nome do restaurante">
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Digite o número">
        <input type="text" name="address" v-model="restaurant.address" placeholder="Digite o endereço">
        <button type="button" @click="updateRestaurant">Atualizar</button>
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
            restaurant: {
                name: '',
                contact: '',
                address: '',
            }
        }
    },

    methods: {
        async updateRestaurant() {
            const result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            })
            if(result.status==200) {
                this.$router.push({name:"HomePage"})
            }
        }
    },

    async mounted() {
        let user = localStorage.getItem('user-info')
        let userData = JSON.parse(user)

        if (!user) {
            this.$router.push({ name: "SignUp" })
        } else {
            this.userName = userData[0].nome
        }
        const result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`)
        this.restaurant = result.data
    }
}
</script>

<style></style>