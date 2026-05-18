import {fileURLToPath, URL} from "url";

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
    ],
    base: "/liliana-sanfilippo/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        host: true,
    },

});
