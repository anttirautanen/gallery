import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import viteReact from "@vitejs/plugin-react"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [viteReact()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/gallery.ts"),
      name: "Gallery",
      fileName: "gallery",
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
})
