import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⚠️ IMPORTANT: niche base me apna GitHub repo name likho
// Example: agar tumhara repo URL hai https://username.github.io/apping-main/
// to base: "/apping-main/"
export default defineConfig(() => ({
  base: "/apping-main/", // ✅ ye line sabse important hai (change repo name accordingly)

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
