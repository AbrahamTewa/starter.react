// ******************** NodeJS packages ********************
const grunt = require('grunt');

// ******************** Script ********************
grunt.initConfig({

    browserify: {
        build: { options:  { transform: [['babelify', {presets: ['es2015', 'react']}]] }
               , files: { 'build/index.js' : 'src/index.js' } }
    }


   , copy: {
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
           files: ['src/**/*.*'
                  , 'gruntfile.js'
                  , 'package.json'
                  , '.eslintrc.json']
        , tasks: ['build']
        , options: { atBegin : true
                   , spawn   : false
        }
       }
   }

});

grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-mocha');

// Registering all tasks
grunt.registerTask('lint', ['eslint']);
grunt.registerTask('build', ['eslint', 'clean:build', 'copy', 'browserify']);
grunt.registerTask('default', ['build']);
