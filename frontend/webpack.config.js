const path = require('path');

module.exports = {
  mode: 'development', // Или 'production', в зависимости от вашего окружения
  entry: './src/index.js', // Главный файл входа для вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к выходной папке (каталогу сборки)
    filename: 'bundle.js', // Имя собранного файла
    publicPath: '/', // Путь, который будет использоваться в HTML для загрузки ресурсов
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Расширения файлов, на которые применяется правило
        exclude: /node_modules/, // Исключить обработку файлов из node_modules
        use: {
          loader: 'babel-loader', // Использовать babel-loader для транспиляции JavaScript
        },
      },
      {
        test: /\.css$/, // Расширение файлов стилей
        use: ['style-loader', 'css-loader'], // Использовать style-loader и css-loader для обработки CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Расширения файлов изображений
        use: [
          {
            loader: 'file-loader', // Использовать file-loader для обработки файлов изображений
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения файлов, которые webpack будет автоматически распознавать
  },
};
