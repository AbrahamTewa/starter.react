/* eslint-env node */

// ******************** NodeJS packages ********************
import grunt from 'grunt';

require('load-grunt-tasks')(grunt);

//const isProctionTarget = process.env.NODE_ENV === 'production';

// ******************** Script ********************

grunt.initConfig({
    clean: { analysis : ['reports/analysis']
           , build    : ['build/']
           , coverage : ['reports/coverage']
           , jsdoc    : ['doc/jsdoc/']
           , storybook: ['doc/storybook/']}

    , copy: {
        html: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.htm', '**/*.html'],
                dest: 'build/'
            }]
        }
    },

    cssmin: {
        options: {sourceMap: true},
        target: {
            files: {
                'build/index.css': 'build/index.css'
            }
        }
    }

    , eslint: {
        src: { expand: true
             , cwd   : 'src'
             , src   : ['**/*.js']
             , ext   : '.js'}
      , storybook: { expand: true
                   , cwd   : 'storybook'
                   , src   : ['**/*.js']
                   , ext   : '.js'}
      , tools: ['gruntfile.js'
               ,'gruntfile.babel.js'
               ,'server.js'
               ,'webpack.config.js'
               ,'webpack.development.js'
               ,'webpack.production.js']
    }

    , jsonlint: {
        options: { format: true
                 , indent: 2}
      , src  : { expand: true
               , cwd   : 'src'
               , src   : '**/*.json'}
      , tools: { expand: false
               , cwd   : '.'
               , src   : ['.json'
                         ,'.babelrc']}
    }

    , sass: {
        options: {
            sourceMap: true
        }
        , build: {
            files: { 'build/index.css' : 'src/index.scss'}
        }
    }

    , sasslint: {
        src: ['src/**/*.s+(a|c)ss']
    }

    /*, webpack: { auto       : require('./webpack.config').default
               , development: require('./webpack.development').default
               , production : require('./webpack.production').default }*/
});

// Registering all tasks
grunt.registerTask('lint', ['eslint', 'sasslint', 'jsonlint']);
grunt.registerTask('pre-build', ['lint', 'clean:build', 'copy:html', 'sass', 'cssmin']);
grunt.registerTask('default', ['build']);
