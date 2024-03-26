import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xxxl: { max: '3019px' },
			xxl: { max: '2560px' },
			xl: { max: '1920px' },
			'desktop-l': { max: '1880px' },
			'desktop-m': { max: '1680px' },
			'laptop-x': { max: '1440px' },
			'laptop-m': { max: '1280px' },
			lg: { max: '1170px' },
			md: { max: '991px' },
			sm: { max: '767px' },
			xs: { max: '414px' },
			xxs: { max: '375px' },
			'2xl': '1921px',
			DEFAULT: '1576px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '26px',
				xxl: '3rem',
				xl: '3rem',
				lg: '3rem',
				md: '30px',
				sm: '18px',
				xs: '15px',
			},
		},
		fontFamily: {
			primary: ['Poppins', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#129F64',
				secondary: '#F3C75A',
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
			},
		},
	},
	plugins: [],
};
export default config;
