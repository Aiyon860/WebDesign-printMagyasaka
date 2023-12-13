/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
	theme: {
		colors: {
			'black-platinum': '#273036',
			'beige': '#f5f5dc',
			'hazelnut': '#a8715a'
		},

		extend: {
			fontFamily: {
				"epilogue": ['Epilogue', 'sans-serif'],
				"barlow": ['Barlow', 'sans-serif']
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}