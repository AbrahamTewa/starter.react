import path from 'path';

const config = { devtool : 'source-map'
               , entry   : './src/index.js'
               , output  : { path: path.resolve(__dirname, 'build')
                           , filename: 'index.js'
                           , publicPath: '/'}
               , resolve : { modules: ['node_modules']}};

config.module = {rules: []};

// JSX rule
{
    let rule;

    rule = { test: /\.js$/
           , include: [path.resolve(__dirname), 'src']
           , loader : 'babel-loader'};

    config.module.rules.push(rule);
}

export default config;
