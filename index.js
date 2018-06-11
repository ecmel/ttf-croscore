const path = require('path')

const folder = path.join(__dirname, 'fonts')

module.exports = {

  ARIMO_REGULAR: path.join(folder, 'Arimo-Regular.ttf'),
  ARIMO_BOLD: path.join(folder, 'Arimo-Bold.ttf'),
  ARIMO_ITALIC: path.join(folder, 'Arimo-Italic.ttf'),
  ARIMO_BOLD_ITALIC: path.join(folder, 'Arimo-BoldItalic.ttf'),

  TINOS_REGULAR: path.join(folder, 'Tinos-Regular.ttf'),
  TINOS_BOLD: path.join(folder, 'Tinos-Bold.ttf'),
  TINOS_ITALIC: path.join(folder, 'Tinos-Italic.ttf'),
  TINOS_BOLD_ITALIC: path.join(folder, 'Tinos-BoldItalic.ttf'),

  COUSINE_REGULAR: path.join(folder, 'Cousine-Regular.ttf'),
  COUSINE_BOLD: path.join(folder, 'Cousine-Bold.ttf'),
  COUSINE_ITALIC: path.join(folder, 'Cousine-Italic.ttf'),
  COUSINE_BOLD_ITALIC: path.join(folder, 'Cousine-BoldItalic.ttf'),

}