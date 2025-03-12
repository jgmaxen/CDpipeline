import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3001',
    setupNodeEvents(on, config) {
      console.log("🔍 Cypress Base URL:", config.baseUrl);
    },
  },
});
