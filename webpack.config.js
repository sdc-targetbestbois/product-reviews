const path = require('path');
const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './dist');

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
   resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};



// module.exports = {
//   entry: [`${SRC_DIR}/index.js`],
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         include: SRC_DIR,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: true,
//             },
//           },
//         ],
//       },
//       // {
//       //   test: /\.css$/i,
//       //   use: ['css-loader'],
//       // },
//       {
//         test: /\.css$/i,
//         exclude: /node_modules/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//         ],
//       },
//     ],

//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
// };