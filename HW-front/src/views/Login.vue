<template>
    <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <label>Email:</label>
        <input v-model="email" type="email" required />
        <label>Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit">Login</button>
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
    async login() {
        try {
        const response = await axios.post('/api/auth/login', {
            email: this.email,
            password: this.password,
        });
        localStorage.setItem('authToken', response.data.token);
        this.$router.push('/'); // Redireciona para o dashboard
        } catch (error) {
        console.error('Login failed:', error.response.data);
        alert('Login failed: ' + error.response.data.message);
        }
    },
    },
};
</script>
