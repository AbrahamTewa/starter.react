const { resolve } = require('path');

const config = { context: resolve(__dirname, 'src')
               , entry  : './index.js'

               , output : { filename: 'index.js'
                          , path: resolve(__dirname, 'build')}

               , module : { rules  : [{ test: /\.js$/
                          , exclude: /(node_modules)/
                          , use    : { loader: 'babel-loader' }}]}
};

module.exports = config;
