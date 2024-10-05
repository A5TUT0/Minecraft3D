import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/images/*",
          dest: "assets/images", // Carpeta destino en `dist`
        },
      ],
    }),
  ],
  build: {
    outDir: "dist",
  },
});
