<template>
    <header class="header">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/add">Add Restaurant</RouterLink>
            <a @click="logout">Logout</a>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    name: 'HeaderPage',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'LoginPage' });
        }
    },
    components: { RouterLink }
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