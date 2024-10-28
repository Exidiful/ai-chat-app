/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class', // Enable dark mode
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
