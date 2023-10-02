const fs = require('fs');
const { promisify } = require('util');
const fontmin = require('fontmin');
const unicodes = [
  '1F44B', // 👋
  '2620', // ☠️
  '2764', // ❤️
  '1F6CD', // 🛍️
  '1F454', // 👔
  '1F4BB', // 💻
  '1F396', // 🎖️
  '1F393', // 🎓
  '1F3C3', // 🏃
  '1F6B4', // 🚴
  '1F3CB', // 🏋️
  '1F3AE', // 🎮
  '1F3B6', // 🎶
  '1F648', // 🙈
  '1F64B', // 🙋
  '1F680', // 🚀
  '1F422', // 🐢
  '1F43F', // 🐿️
  '1F61F' // 😟
];

const fontPath = 'public/fonts/original/noto-emoji.ttf';
const outputPath = 'public/fonts/noto-emoji-custom.woff2';

async function buildEmojiFont() {
  const fontBuffer = await promisify(fs.readFile)(fontPath);
  const fontminInstance = new fontmin()
    .src(fontBuffer)
    .use(fontmin.glyph({ 
      text: unicodes.map(u => String.fromCodePoint(parseInt(u, 16))).join(''), 
      hinting: false 
    }))
    .use(fontmin.ttf2woff2());
  const result = await promisify(fontminInstance.run.bind(fontminInstance))();
  await promisify(fs.writeFile)(outputPath, result[0].contents);
}

buildEmojiFont()
  .then(() => console.log('Emoji font build complete'))
  .catch(err => console.error('Emoji font build failed:', err));
  