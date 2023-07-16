import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve, dirname} from 'node:path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueI18n({
            // you need to set i18n resource including paths
            include: resolve(dirname(fileURLToPath(import.meta.url)), '../locales'),
        })
    ],
    server: {
        host: true,
        port: 5173, // This is the port which we will use in docker
        // Thanks @sergiomoura for the window fix
        // add the next lines if you're using windows and hot reload doesn't work
        watch: {
            usePolling: true
        }
    },
    // resolve: {
    //     alias: {
    //         '@': fileURLToPath(new URL('./src', import.meta.url))
    //     }
    // }
})
