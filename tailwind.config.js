const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const pxToRem = (px, base = 16) => `${px / base}rem`;

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: '768px',
      desktop: '1024px',
    },
    colors: {
      white: '#F5F5F5',
      black: '#28252A',
      red: '#FC3441',
      transparent: 'transparent',
      overlay: 'rgba(0,0,0,0.6)',
      'overlay-light': 'rgba(0,0,0,.45)',
      'locale-hover': 'rgba(144,202,249,0.08)',
      grey: '#9A9A9A',
      'overlay-dark': '#000 0%',
      'trasparent-full': 'transparent 100%'
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      animation: {
        fadeIn: 'fade 2s ease-in-out forward',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      borderRadius: {
        cards: `${pxToRem(34)}`,
      }
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/line-clamp'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: pxToRem(96),
          lineHeight: pxToRem(112),
          fontWeight: '600',
        },
        h2: {
          fontSize: pxToRem(60),
          lineHeight: pxToRem(82),
          fontWeight: '600',
        },
        h3: {
          fontSize: pxToRem(48),
          lineHeight: pxToRem(72),
          fontWeight: '400',
        },
        h4: {
          fontSize: pxToRem(34),
          lineHeight: pxToRem(51),
          fontWeight: '400',
        },
        h5: {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(36),
          fontWeight: '400',
        },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.heading-1': {
          fontSize: pxToRem(96),
          lineHeight: pxToRem(112),
        },
        '.heading-2': {
          fontSize: pxToRem(76),
          lineHeight: pxToRem(98),
        },
        '.heading-3': {
          fontSize: pxToRem(60),
          lineHeight: pxToRem(82),
        },
        '.heading-4': {
          fontSize: pxToRem(48),
          lineHeight: pxToRem(72),
        },
        '.heading-5': {
          fontSize: pxToRem(38),
          lineHeight: pxToRem(60),
        },
        '.heading-5-small': {
          fontSize: pxToRem(34),
          lineHeight: pxToRem(51),
        },
        '.heading-6': {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(36),
        },
        '.body-1': {
          fontSize: pxToRem(18),
          lineHeight: pxToRem(27),
          fontWeight: '300',
        },
        '.body-2': {
          fontSize: pxToRem(16),
          lineHeight: pxToRem(24),
          fontWeight: '300',
        },
        '.body-3': {
          fontSize: pxToRem(14),
          lineHeight: pxToRem(21),
          fontWeight: '300',
        },
        '.caption': {
          fontSize: pxToRem(12),
          lineHeight: pxToRem(18),
          fontWeight: '300',
          textTransform: 'uppercase',
        },
      });
    }),
  ],
};
