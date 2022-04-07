module.exports = {
  content: ['./src/**/*.{html,js}', "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: '200px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}