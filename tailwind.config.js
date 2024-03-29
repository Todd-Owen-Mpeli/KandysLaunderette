/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",

			// Base colors Variables
			white: "#fff",
			black: "#111",
			grey: "#b3b3b3",
			darkGrey: "#8f8f8f",
			pureBlack: "#000",
			lightGrey: "#f5f5f5",

			// Main colors
			pink: "#dd4577",
			blue: "#2563eb",
			yellow: "#ffc915",
			darkPink: "#950e3b",
			babyBlue: "#5ac3ff",
			fadedPink: "#ff8fb4",
			darkYellow: "#f0b800",
			brightGreen: "#1eca00",
			fadedYellow: "#f3d162",
			fadedPinkTwo: "#fcbfd4",
			fadedPinkThree: "#f2739d",
		},
	},
	plugins: [],
};
