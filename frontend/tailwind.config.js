module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FF6C6C",
					shd1: "#FF8787",
				},
				accent: {
					DEFAULT: "#161313",
					shd1: "#231F1F",
					shd2: "#201C1C",
					shd3: "#414141",
				},
			},
			height: {
				hero: "900px",
			},
			fontFamily: {
				display: ["Inconsolata"],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.700"),
						blockquote: {
							borderLeftColor: theme("colors.gray.700"),
						},
						"ol > li::before": {
							color: theme("colors.gray.700"),
						},
						"ul > li::before": {
							backgroundColor: theme("colors.gray.700"),
						},
						a: {
							color: theme("colors.neon-orange"),
						},
					},
				},

				dark: {
					css: {
						color: theme("colors.gray.300"),
						blockquote: {
							borderLeftColor: theme("colors.gray.300"),
						},
						"ol > li::before": {
							color: theme("colors.gray.300"),
						},
						"ul > li::before": {
							backgroundColor: theme("colors.gray.300"),
						},
						a: {
							color: theme("colors.yellow.500"),
						},
						h1: {
							color: theme("colors.gray.100"),
						},
						h2: {
							color: theme("colors.gray.100"),
						},
						h3: {
							color: theme("colors.gray.100"),
						},
						h4: {
							color: theme("colors.gray.100"),
						},
						h5: {
							color: theme("colors.gray.100"),
						},
						h6: {
							color: theme("colors.gray.100"),
						},
						strong: {
							color: theme("colors.gray.100"),
						},
						code: {
							color: theme("colors.gray.100"),
						},
						figcaption: {
							color: theme("colors.gray.100"),
						},
						blockquote: {
							color: theme("colors.gray.100"),
							borderLeftColor: theme("colors.gray.200"),
						},
					},
				},
			}),
		},
	},
	variants: {
		typography: ["dark"],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),

	],
};