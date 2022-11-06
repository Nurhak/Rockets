/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import * as z from 'zod';

const baseSchema = {
  VITE_API_URL: z.string(),
};

const schema = z.object(baseSchema);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  try {
    schema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // eslint-disable-next-line no-console
      console.error('Invalid env', error.issues);
      process.exit(1);
    }
  }
  return {
    // vite config
    plugins: [react()],
    resolve: {
      alias: {
        '@': `${__dirname}/src`,
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTest.ts',
      css: false,
    },
  };
});
