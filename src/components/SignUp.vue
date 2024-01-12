<template>
    <img class="logo" src="../assets/logo-restaurant.jpg" alt="Logo do restaurante">
    <h1>Se inscreva</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Digite seu nome">
        <input type="email"  v-model="email" placeholder="Digite seu email">
        <input type="password"  v-model="senha" placeholder="Digite sua senha">
        <button @click="signUp">Registrar</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'SignUp',
        data() {
            return {
                name: '',
                email: '',
                senha: ''
            }
        },
        methods: {
            async signUp() {
                const result = await axios.post('http://localhost:3000/users', {
                    email:this.email,
                    senha:this.senha,
                    nome:this.name
                    })

                console.log(result)
                if(result.status==201) {
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:"HomePage"})
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