/* eslint-env node */

import path from 'path';

export default { devtool : 'source-map'
               , devServer: { hot: true
                            , contentBase: path.resolve(__dirname, 'build')
                            , publicPath: '/'}
               , entry   : ['./src/index.js'
                           ,'./src/index.scss']
               , module  : { rules: [{ enforce: 'pre'
                                     , test   : /\.js$/
                                     , include: [path.resolve(__dirname), 'src']
                                     , exclude: /node_modules/
                                     , use    : ['eslint-loader']}

                                    ,{ enforce: 'pre'
                                     , test   : /\.s[a|c]ss$/
                                     , include: [path.resolve(__dirname), 'src']
                                     , exclude: /node_modules/
                                     , use: [{loader: 'sasslint-loader'}]}

                                    ,{ test   : /\.js$/
                                     , include: [path.resolve(__dirname), 'src']
                                     , exclude: /node_modules/
                                     , loader : 'babel-loader'}

                                        // Stylesheets
                                    , { test   : /\.s[a|c]ss$/
                                      , include: [path.resolve(__dirname), 'src']
                                      , exclude: /node_modules/
                                      , use: [{loader: 'style-loader'} // creates style nodes from JS strings
                                             ,{loader: 'css-loader'  } // translates CSS into CommonJS
                                             ,{loader: 'sass-loader' }]}]}

               , output  : { path: path.resolve(__dirname, 'build')
                           , filename: 'index.js'
                           , publicPath: '/'}
               , resolve : { modules: ['node_modules']}};
