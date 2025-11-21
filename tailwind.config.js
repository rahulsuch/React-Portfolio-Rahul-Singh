/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		backgroundImage: {
  			'deep-night-gradient': 'linear-gradient(to top, #4c0b30, #3f0d27, #330d1f, #260d17, #1b080f, #1a0710, #190510, #180411, #1f091d, #210e2c, #1c143d, #001c4f)',
  			'sunrise-glow': 'linear-gradient(to bottom, #ff3e3e, #ff6282, #ff8bbb, #feb3e3, #f5d7fa, #f3dafc, #f1defe, #f0e1ff, #eec8ff, #f0acff, #f68cfd, #ff64f2)'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		zIndex: {
  			'-10': '-10',
  			'-20': '-20'
  		},
  		transitionDuration: {
  			'700': '700ms'
  		},
  		colors: {
  			lightBase: '#f7f5f2',
  			lightLayer: '#e7e5e4',
  			darkBase: '#0f0f0f',
  			darkLayer: '#1c1917',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
