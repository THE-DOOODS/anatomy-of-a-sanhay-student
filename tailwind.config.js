/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Poppins", "sans-serif"],
			},
			backgroundColor: {
				primary: "##bb2e2e",
			},
			textColor: {
				primary: "#bb2e2e",
			},
		},
	},
	plugins: [],
};
