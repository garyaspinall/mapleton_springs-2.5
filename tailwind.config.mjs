/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		colors: {
      'lime': '#8cae36',
      'green1': '#3E6A31',
      'white': '#FFFFFF',
      'off-white': '#FCF8ED',
    },
		extend: {
			spacing: {
				'carouselHeight': '800px',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
