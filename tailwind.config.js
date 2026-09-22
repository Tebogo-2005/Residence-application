/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'oklch(var(--ink) / <alpha-value>)',
        cream: 'oklch(var(--cream) / <alpha-value>)',
        paper: 'oklch(var(--paper) / <alpha-value>)',
        terra: 'oklch(var(--terra) / <alpha-value>)',
        sage: 'oklch(var(--sage) / <alpha-value>)',
        gold: 'oklch(var(--gold) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
      },
    },
  },
  plugins: [],
}
