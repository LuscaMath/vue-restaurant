<template>
    <header class="header">
        <nav>
            <a href="#">Home</a>
            <a href="#">Add Restaurant</a>
            <a href="#">Update Restaurant</a>
            <a @click="logout">Logout</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name:'HeaderPage',
        methods:{
            logout() {
                localStorage.clear()
                this.$router.push({name:'LoginPage'})
            }
        }
    }
</script>

<style>
    .header nav {
        background-color: #333;
        overflow: hidden;
    }
    .header nav a {
        float: left;
        color: #f2f2f2;
        padding: 16px 14px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
        margin-right: 5px;
    }
    .header nav a:hover {
       background-color: #ddd;
       color: #333;
    }
</style>