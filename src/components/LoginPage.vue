<template>
    <img class="logo" src="../assets/logo-restaurant.jpg" alt="Logo do restaurante">
    <h1>Login</h1>
    <div class="login">
        <input type="email"  v-model="email" placeholder="Digite seu email">
        <input type="password"  v-model="senha" placeholder="Digite sua senha">
        <button @click="login">Login</button>
        <p>
            <router-link to="/sign-up">Inscreva-se</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'LoginPage',
        data() {
            return {
                email: '',
                senha: ''
            }
        },
        methods: {
            async login() {
                const result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&${this.password}`  
                )
                if(result.status == 200 && result.data.length > 0) {
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:"HomePage"})
                } else {
                    alert("Email ou senha incorretos!")
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')
            if(user) {
                this.$router.push({name:"HomePage"})
            }
        }
    }
</script>

<style>
</style>