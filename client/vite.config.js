// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://maassociates.co.ke/",
  // Specify the target browsers for compatibility
  // Adjust according to your specific needs
  build: {
    target: "es2015", // Set the target JavaScript version
    polyfillDynamicImport: false, // Disable dynamic import polyfill for modern browsers
    terserOptions: {
      compress: {
        keep_infinity: true,
        // Customize compression options as needed
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
