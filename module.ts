import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-auth-module',
    configKey: 'auth',
  },
  setup(_, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({ path: './components', prefix: '' });
    });
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push('./composables');
    });
  },
});
