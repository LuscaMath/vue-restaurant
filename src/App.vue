<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 150px;
}
.register, .login, .add-restaurant {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.register input, .login input, .add-restaurant input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid skyblue;
}
.register button, .login button, .add-restaurant button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #ffffff;
  cursor: pointer;
}
</style>
