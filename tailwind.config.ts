import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#E1E1E1',
        gold: '#CD8A08',
        gray: '#3F3F3F',
        darkGray: '#1C1C1C',
        goldGradient: 'linear-gradient(90deg, #CD8A08 0%, #E1A93D 100%)',
      },
    },
  },
  plugins: [],
}

export default config
