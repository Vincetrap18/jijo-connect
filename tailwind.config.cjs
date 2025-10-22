/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      /* ------------------------------
         🎨 Jijoh Brand Colors
      ------------------------------ */
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#ef4444', // Primary Red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Orange accent
          600: '#ea580c',
          700: '#c2410c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },

      /* ------------------------------
         💎 Typography & Font Settings
      ------------------------------ */
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // for luxury/hero text
      },
      fontSize: {
        '2xs': '0.7rem',
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },

      /* ------------------------------
         🌈 Gradients & Shadows
      ------------------------------ */
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.06)',
        card: '0 6px 20px rgba(0,0,0,0.08)',
        brand: '0 4px 16px rgba(239, 68, 68, 0.25)',
        glow: '0 0 25px rgba(249, 115, 22, 0.4)',
      },

      /* ------------------------------
         ✨ Animations & Transitions
      ------------------------------ */
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        float: 'float 4s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
