import { ref } from 'vue';
import { useRouter } from '#imports';

export const useAuth = () => {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const token = ref('');

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      user.value = data.user;
      isAuthenticated.value = true;
      token.value = data.token;

      localStorage.setItem('auth_token', data.token);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      user.value = null;
      isAuthenticated.value = false;
      token.value = '';
      localStorage.removeItem('auth_token');
      const router = useRouter();
      router.push('/login');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { user, isAuthenticated, login, logout, token };
};
