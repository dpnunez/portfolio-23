import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': '#F97316',
        'primary-light': '#FB9D5C',
        'primary-dark': '#AE510F',
        'primary-low-opacity': 'rgba(249, 115, 22, 0.1)',

        'gray-900': '#040405',
        'gray-800': '#212122',
        'gray-700': '#3E3F3F',
        'gray-600': '#5B5C5C',
        'gray-500': '#797979',
        'gray-400': '#969696',
        'gray-300': '#D1D5DB',
        'gray-200': '#E5E7EB',
        'gray-100': '#EDEEED',
        'gray-50': '#FCFCFB',

        green: '#22C55E',
        'green-low-opacity': 'rgba(34, 197, 94, 0.1)',
        purple: '#4F46E5',
        'purple-low-opacity': 'rgba(79, 70, 229, 0.1)',
      },
      fontSize: {
        caption: '0.875rem',
        body: '1rem',
        h3: '1.5rem',
        h2: '2rem',
        h1: '3.375rem',
      },
      container: {
        // you can configure the container to be centered
        center: true,
        padding: '8px',

        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: 'calc(1216px + 16px)',
          '2xl': 'calc(1216px + 16px)',
        },
      },
    },
  },
  plugins: [],
}
export default config
