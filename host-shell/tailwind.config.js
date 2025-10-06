/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    '../mfe-home/src/**/*.{html,ts}',
    '../mfe-agenda/src/**/*.{html,ts}',
    '../mfe-pessoas/src/**/*.{html,ts}',
    '../mfe-planos/src/**/*.{html,ts}',
    '../mfe-shared//mfe-shared/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

