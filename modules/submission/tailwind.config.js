const { presetTailwindConfig } = require('@topexam/web.lib.theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    presetTailwindConfig
  ],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
