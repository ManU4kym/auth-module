<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="credentials.email" type="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" v-model="credentials.password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

const { login } = useAuth();
const credentials = ref({ email: '', password: '' });
const error = ref('');

const handleLogin = async () => {
    try {
        error.value = '';
        await login(credentials.value);
    } catch (err) {
        error.value = 'Login failed. Please check your credentials.';
    }
};
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 50px auto;
}

.error {
    color: red;
}
</style>