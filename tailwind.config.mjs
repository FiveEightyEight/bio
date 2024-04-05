import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'loader-spin': 'spin 2s linear infinite',
			},
			fontFamily: {
				sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				spin: {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
