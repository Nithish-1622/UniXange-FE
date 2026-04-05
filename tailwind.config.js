/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        price: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'page-gradient':
          'radial-gradient(circle at 8% 2%, rgba(14, 165, 233, 0.18), transparent 34%), radial-gradient(circle at 88% 0%, rgba(245, 158, 11, 0.16), transparent 35%), linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)',
      },
      boxShadow: {
        card: '0 8px 20px rgba(15, 23, 42, 0.08)',
        'card-strong': '0 14px 26px rgba(15, 23, 42, 0.13)',
      },
    },
  },
  plugins: [],
}

