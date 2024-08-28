import { defineConfig, loadEnv } from 'vite';
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '../../.', '');
    return {
        define: {
            'process.env.YOUR_STRING_VARIABLE': JSON.stringify(env.YOUR_STRING_VARIABLE),
            // If you want to exposes all env variables, which is not recommended
            // 'process.env': env
        },
        plugins: [react()],

    };
});