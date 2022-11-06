// vite.config.ts
import react from "file:///Users/nurhakaltin/Personal/quin-assignment/node_modules/.pnpm/@vitejs+plugin-react@2.2.0_vite@3.2.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///Users/nurhakaltin/Personal/quin-assignment/node_modules/.pnpm/vite@3.2.2/node_modules/vite/dist/node/index.js";
import * as z from "file:///Users/nurhakaltin/Personal/quin-assignment/node_modules/.pnpm/zod@3.19.1/node_modules/zod/lib/index.mjs";
var __vite_injected_original_dirname = "/Users/nurhakaltin/Personal/quin-assignment";
var baseSchema = {
  VITE_API_URL: z.string()
};
var schema = z.object(baseSchema);
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  try {
    schema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Invalid env", error.issues);
      process.exit(1);
    }
  }
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": `${__vite_injected_original_dirname}/src`
      }
    },
    define: {
      __APP_ENV__: env.APP_ENV
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTest.ts",
      css: false
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbnVyaGFrYWx0aW4vUGVyc29uYWwvcXVpbi1hc3NpZ25tZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbnVyaGFrYWx0aW4vUGVyc29uYWwvcXVpbi1hc3NpZ25tZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9udXJoYWthbHRpbi9QZXJzb25hbC9xdWluLWFzc2lnbm1lbnQvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZS9jbGllbnRcIiAvPlxuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgKiBhcyB6IGZyb20gJ3pvZCc7XG5cbmNvbnN0IGJhc2VTY2hlbWEgPSB7XG4gIFZJVEVfQVBJX1VSTDogei5zdHJpbmcoKSxcbn07XG5cbmNvbnN0IHNjaGVtYSA9IHoub2JqZWN0KGJhc2VTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xuICB0cnkge1xuICAgIHNjaGVtYS5wYXJzZShlbnYpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGVudicsIGVycm9yLmlzc3Vlcyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgLy8gdml0ZSBjb25maWdcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBgJHtfX2Rpcm5hbWV9L3NyY2AsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9FTlZfXzogZW52LkFQUF9FTlYsXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBzZXR1cEZpbGVzOiAnLi9zcmMvc2V0dXBUZXN0LnRzJyxcbiAgICAgIGNzczogZmFsc2UsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUlBLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsZUFBZTtBQUN0QyxZQUFZLE9BQU87QUFObkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTSxhQUFhO0FBQUEsRUFDakIsY0FBZ0IsU0FBTztBQUN6QjtBQUVBLElBQU0sU0FBVyxTQUFPLFVBQVU7QUFFbEMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLE1BQUk7QUFDRixXQUFPLE1BQU0sR0FBRztBQUFBLEVBQ2xCLFNBQVMsT0FBUDtBQUNBLFFBQUksaUJBQW1CLFlBQVU7QUFFL0IsY0FBUSxNQUFNLGVBQWUsTUFBTSxNQUFNO0FBQ3pDLGNBQVEsS0FBSyxDQUFDO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUFBLElBRUwsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssR0FBRztBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixhQUFhLElBQUk7QUFBQSxJQUNuQjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
