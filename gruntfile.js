// ******************** NodeJS packages ********************
const grunt = require('grunt');
const webpackConfig = require('./webpack.config');


// ******************** Script ********************
grunt.initConfig({
    copy: {
       html: {
           files: [{
               expand: true,
               cwd: 'src',
               src: ['**/*.htm', '**/*.html'],
               dest: 'build/'
           }]
       }
   }
    
   , clean: {
       build: ['build/'],
       doc : ['doc/']
   }

   , eslint: {
       target: {
           expand: true
         , cwd   : 'src'
         , src   : ['**/*.js']
         , dest  : 'build/'
         , ext   : '.js'}
   }

   , mocha : {
       test: {
           src: ['src\\**\\__test__\\**\\*.js'],
           opts : 'mocha.opts'
       }
   }

   , watch: {
       scripts: {
           files: [ 'src/**/*.*'
                  , 'gruntfile.js'
                  , 'package.json'
                  , '.eslintrc.json']
        , tasks: ['build']
        , options: { atBegin : true
                   , spawn   : false
        }
       }
   }

   , webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    }

});

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-mocha');
grunt.loadNpmTasks('grunt-webpack');


// Registering all tasks
grunt.registerTask('lint', ['eslint']);
grunt.registerTask('build', ['eslint', 'clean:build', 'copy:html', 'webpack']);
grunt.registerTask('default', ['build']);
