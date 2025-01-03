<template>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li v-if="!isAuthenticated"><a href="/login">Login</a></li>
                <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';
const { isAuthenticated, logout } = useAuth();
</script>

<style scoped>
nav ul {
    display: flex;
    list-style: none;
}

nav li {
    margin-right: 20px;
}
</style>