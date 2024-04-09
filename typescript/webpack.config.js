const path = require('path');

module.exports = {
  entry: './src/index.js',   // Ruta de entrada de tu archivo principal
  output: {
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
    filename: 'bundle.js'    // Nombre del archivo de salida
  }
};
