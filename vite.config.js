import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "freelancer-j39",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000, // Specify your desired port
  },
});
