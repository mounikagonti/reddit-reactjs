import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        custom: 'calc(100% - 250px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customRedOrange: '#FD4300',
        grayColor: '#2A3236',
        textGray: '#5D6D75',
        bgColor: '#0E1113',
        aquaBlue: '#0DD3BB',
        yellow: '#FFD635',
        limeGreen: '#94E044',
        deepBlue: '#014980',
        goldenrod: '#AB912B',
      },
    },
  },
  plugins: [],
}
export default config
