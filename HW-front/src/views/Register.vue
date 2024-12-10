<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label>Email:</label>
        <input v-model="email" type="email" required />
        <label>Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:3000/api/auth/register', {
            email: this.email,
            password: this.password,
          });
          alert('Registration successful! Please login.');
          this.$router.push('/login'); // Redireciona para a página de login
        } catch (error) {
          console.error('Registration failed:', error.response.data);
          alert('Registration failed: ' + error.response.data.message);
        }
      },
    },
  };
  </script>
  