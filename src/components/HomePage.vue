<template>
    <div>
        <HeaderPage></HeaderPage>
        <h1>Hello {{ userName }}</h1>
        <table v-if="restaurants.length !== 0" border="1">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Contato</th>
                <th>Endereço</th>
                <th>Actions</th>
            </tr>
            <tr v-for="restaurant in restaurants" :key="restaurant.id">
                <td>{{ restaurant.id }}</td>
                <td>{{ restaurant.name }}</td>
                <td>{{ restaurant.contact }}</td>
                <td>{{ restaurant.address }}</td>
                <td>
                    <RouterLink :to="'/update/' + restaurant.id">Update</RouterLink>
                    <button @click="deleteRestaurant(restaurant.id)">Delete</button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderPage
    },

    data() {
        return {
            userName: '',
            restaurants: [],
        }
    },

    methods: {
        async fetchRestaurants() {
            const result = await axios.get('http://localhost:3000/restaurants')
            this.restaurants = result.data
        },
        async deleteRestaurant(id) {
            let confirmation = confirm("Deseja realmente excluir os dados?")
            if(confirmation) {
                const result = await axios.delete('http://localhost:3000/restaurants/' + id)
                console.warn(result)
                window.location.reload()
            } else {
                alert("Dados não atualizados!")
            }
            
        }
    },

    mounted() {
        this.fetchRestaurants()
        let user = localStorage.getItem('user-info')
        let userData = JSON.parse(user)
        console.log(userData)

        if (!user) {
            this.$router.push({ name: "SignUp" })
        } else {
            this.userName = userData[0].nome
        }
    }
}
</script>

<style>
    table {
        margin: 0 auto;
    }
    td{
        width: 160px;
        height: 40px;
    }
</style>