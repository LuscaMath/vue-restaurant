<template>
    <img class="logo" src="../assets/logo-restaurant.jpg" alt="Logo do restaurante">
    <h1>Se inscreva</h1>
    <div class="register">
        <input type="text" placeholder="Digite seu nome">
        <input type="email" placeholder="Digite seu email">
        <input type="password" placeholder="Digite sua senha">
        <button>Registrar</button>
    </div>
</template>

<script>
    export default {
        name:'SignUp',
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