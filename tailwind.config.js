import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,svelte,ts,js}'],
  theme: {
    extend: {
      colors: {
        primary: colors.amber[500],
        'primary-hover': colors.amber[400],
        'primary-dark': colors.amber[700],
        bg: colors.zinc[950],
        surface: colors.zinc[900],
        card: colors.zinc[800],
        text: colors.zinc[100],
        'text-secondary': colors.zinc[400],
        success: colors.emerald[500],
        danger: colors.red[500],
      },
    },
  },
  plugins: [],
};
