import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium-build';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), cesium()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
