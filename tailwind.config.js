/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				"myText3": "var(--myText3)",
				"myGreen": "var(--myGreen)",
				"myBlue": "var(--myBlue)",
				"myYellow": "var(--myYellow)",
				"myPink": "var(--myPink)",
				"myBrown": "var(--myBrown)",
				"myOx": "var(--myOx)"
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				corner: {
					'0%, 100%': { 'border-top-left-radius': '1% 50%', background: 'var(--myOx)' },
					'12.5%': { 'border-top-left-radius': '50%', 'border-top-right-radius': '50%', background: 'var(--myGreen)' },
					'25%': { 'border-top-right-radius': '1% 50%', background: 'var(--myGreen)' },
					'25.125%': { 'border-top-right-radius': '50% 1%', background: 'var(--myYellow)' },
					'37.5%': { 'border-top-right-radius': '50%', 'border-bottom-right-radius': '50%', background: 'var(--myPink)' },
					'50%': { 'border-bottom-right-radius': '50% 50%', background: 'var(--myBlue)' },
					'50.125%': { 'border-bottom-right-radius': '1% 50%', background: 'var(--yellow)' },
					'62.5%': { 'border-bottom-right-radius': '50%', 'border-bottom-left-radius': '50%', background: 'var(--myYellow)' },
					'75%': { 'border-bottom-left-radius': '1% 50%', background: 'var(--myPink)' },
					'75.125%': { 'border-bottom-left-radius': '50% 1%', background: 'var(--myPink)' },
					'87.5%': { 'border-bottom-left-radius': '50%', 'border-top-left-radius': '50%', background: 'var(--myBrown)' },
					'100%': { 'border-top-left-radius': '50% 1%', background: 'var(--myOx)' },
				},
				wave: {
					"0%": {
						transform: "rotate(0deg)"
					},
					"20%": {
						transform: "rotate(-20deg)"
					},
					"40%": {
						transform: "rotate(40deg)"
					},

					"60%": {
						transform: "rotate(-20deg)"
					},
					"80%": {
						transform: "rotate(20deg)"
					},
					"100%": {
						transform: "rotate(0deg)"
					}
				},
				"create-text-animation": {
					"0%": {
						"background-size": " 37%",
						"background-position": " 0 0"
					},
					"20%": {
						"background-size": "37%",
						"background-position": "0 1em"
					},
					"100%": {
						"background-size": "100%",
						"background-position": "- 9em 2em"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"corner": 'corner 3s ease infinite',
				"wave": "wave 3s ease infinite",
				"create-text": "create-text-animation 1s ease in forwards"
			},
			fontFamily: {
				outfitLight: ["Outfit-Light"],
				outfitRegular: ["Outfit-Regular"],
				outfitSemiBold: ["Outfit-SemiBold"],
				outfitBold: ["Outfit-Bold"]
			},
			backgroundImage: {
				'nav-gradient': 'linear-gradient(to right, var(--myPink), var(--myYellow), var(--myBlue), var(--myGreen))',
				"create-gradient": 'linear-gradient(to right, var(--myPink), var(--myYellow), var(--myBlue), var(--myGreen))',
				'img-gradient': 'linear-gradient(to right, var(--myGreen), var(--myYellow))',
			},

		},
	},
	plugins: [require("tailwindcss-animate")],
}
