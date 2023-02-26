const fs = require('fs');
const { promisify } = require('util');
const fontmin = require('fontmin');
const unicodes = [
  'U+1F44B', // 👋
  'U+2620', // ☠️
  'U+2764', // ❤️
  'U+1F6CD', // 🛍️
  'U+1F454', // 👔
  'U+1F4BB', // 💻
  'U+1F396', // 🎖️
  'U+1F393', // 🎓
  'U+1F3C3', // 🏃
  'U+1F6B4', // 🚴
  'U+1F3CB', // 🏋️
  'U+1F3AE', // 🎮
  'U+1F3B6', // 🎶
  'U+1F648', // 🙈
  'U+1F64B', // 🙋
];

const fontPath = 'public/fonts/original/noto-emoji.ttf';
const outputPath = 'public/fonts/noto-emoji-custom.woff2';

async function buildEmojiFont() {
  const fontBuffer = await promisify(fs.readFile)(fontPath);
  const fontminInstance = new fontmin()
    .src(fontBuffer)
    .use(fontmin.glyph({ 
      text: unicodes.map(u => String.fromCodePoint(...u.split(' ').map(x => parseInt(x.slice(2), 16)))).join(''), 
      hinting: false 
    }))
    .use(fontmin.ttf2woff2());
  const result = await promisify(fontminInstance.run.bind(fontminInstance))();
  await promisify(fs.writeFile)(outputPath, result[0].contents);
}

buildEmojiFont()
  .then(() => console.log('Emoji font build complete'))
  .catch(err => console.error('Emoji font build failed:', err));