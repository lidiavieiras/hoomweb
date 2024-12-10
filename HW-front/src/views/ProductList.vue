<template>
    <div>
      <h1>Product List</h1>
      <p>Aqui!!</p>
      <router-link to="/products">Manage Products</router-link>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('authToken');
        this.$router.push('/login'); // Redireciona para login
      },
    },
  };
  </script>
  