import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { crx } from "@crxjs/vite-plugin";
// import manifest from "./manifest.json";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  crx({
  manifest: {
    manifest_version: 3,
    name: "AgreeWise",
    version: "1.0",
    icons: {
    "16":"logo.png"
    },
    action: {
    "default_popup": "index.html"
  }

  }
})
  ]
})
