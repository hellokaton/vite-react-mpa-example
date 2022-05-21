import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import mpa from 'vite-plugin-mpa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin(), mpa({
        scanDir: 'src/packages'
    })],
})
