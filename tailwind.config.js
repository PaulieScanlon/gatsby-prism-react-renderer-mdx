module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        tiny: '.5rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              position: 'relative'
            },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.slate.800'),
              borderRadius: theme('borderRadius.sm'),
              fontWeight: theme('fontWeight.normal'),
              fontSize: theme('fontSize.xs'),
              padding: theme('spacing.1'),
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
