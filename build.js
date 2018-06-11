const fs = require('fs')
const download = require('download')

const fonts = {
  arimo: {
    repo: 'https://github.com/google/fonts/raw/master/apache/arimo',
    files: [
      'Arimo-Regular.ttf',
      'Arimo-Italic.ttf',
      'Arimo-Bold.ttf',
      'Arimo-BoldItalic.ttf'
    ]
  },
  tinos: {
    repo: 'https://github.com/google/fonts/raw/master/apache/tinos',
    files: [
      'Tinos-Regular.ttf',
      'Tinos-Italic.ttf',
      'Tinos-Bold.ttf',
      'Tinos-BoldItalic.ttf'
    ]
  },
  cousine: {
    repo: 'https://github.com/google/fonts/raw/master/apache/cousine',
    files: [
      'Cousine-Regular.ttf',
      'Cousine-Italic.ttf',
      'Cousine-Bold.ttf',
      'Cousine-BoldItalic.ttf'
    ]
  }
}

const fetch = async () => {
  for (const key in fonts) {
    const font = fonts[key]

    for (const file of font.files) {
      const target = `${font.repo}/${file}`

      console.log(`Downloading ${target}`)

      await download(target, 'fonts')
    }
  }
}

fetch()