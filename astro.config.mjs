// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import gruvbox from 'starlight-theme-gruvbox';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'dashdashhelp',
			plugins: [gruvbox()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nyrrd/dashdashhelp' }],
			sidebar: [
				{
					label: 'Environment Variables',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'XDG', slug: 'environment-variables/xdg' },
						{ label: 'Shell', slug: 'environment-variables/shell' },
						{ label: 'Tools', slug: 'environment-variables/tools' },
						{ label: '3rd Party Tools', slug: 'environment-variables/3rd-party' },
					],					
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
					//label: 'Cheatsheets',
					//autogenerate: { directory: 'cheatsheets' },
					//label: 'Snippets',
					//autogenerate: { directory: 'snippets' },
				},
			],
		}),
	],
});
