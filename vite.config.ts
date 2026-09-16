import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Site estático (SPA) — sem servidor, sem SSR. Build gera dist/ pronto pra
// servir em qualquer host de arquivo estático (mesmo padrão das outras LPs).
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
