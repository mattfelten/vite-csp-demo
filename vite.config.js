import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import csp from 'vite-plugin-csp';
import makeCertificate from 'vite-plugin-mkcert';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		https: true,
	},
	plugins: [
		react(),
		makeCertificate(), // Makes an https certificate for local development
		csp({
			enabled: true,
			// policy: {} // This breaks
			// policy: { "script-src": "'strict-dynamic'"} // This is what I want, and also breaks
		}),
	],
});
