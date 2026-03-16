import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "docs",
      filename: "remoteEntry.js",
      exposes: {
        "./About": "./src/pages/About.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5174,
    cors: true,
  },
  preview: {
    port: 5174,
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
    assetsDir: "assets",
  },
});
