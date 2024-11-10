/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // プロジェクト内のファイル
    './node_modules/flowbite/**/*.js', // Flowbiteをスキャン対象に追加
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Flowbiteプラグインを読み込む
  ],
};