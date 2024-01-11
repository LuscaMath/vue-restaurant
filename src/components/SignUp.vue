<template>
    <img class="logo" src="../assets/logo-restaurant.jpg" alt="Logo do restaurante">
    <h1>Se inscreva</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Digite seu nome">
        <input type="email"  v-model="email" placeholder="Digite seu email">
        <input type="password"  v-model="senha" placeholder="Digite sua senha">
        <button @click="signUp">Registrar</button>
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
        }
    }
</script>

<style>
    .logo {
        width: 150px;
    }
    .register {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
    .register input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        border: 1px solid skyblue;
    }
    .register button {
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background-color: skyblue;
        color: #ffffff;
        cursor: pointer;
    }
</style>