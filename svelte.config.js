import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte','.md','.svx'],

	preprocess: [vitePreprocess(), mdsvex({extensions: ['.md','.svx']})],

	kit: { adapter: adapter() },
	prerender: { default: true },
	
};

export default config;
