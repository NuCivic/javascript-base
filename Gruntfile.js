module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          './dist/app.bundle.js': ['./src/**/*.js'] 
        },
        options: {
          transform: [
            ['babelify', { 'presets' : 'es2015'}]
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v0.1 */\n'
      },
      core: {
        src: ['dist/app.bundle.js'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    express: {
      all: {
        options: {
          bases: ['./'],
          port: 8080,
          hostname: '0.0.0.0',
          livereload: true
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'examples/*.js' ],
      options: {
        interval: 5007,
        jshintrc: true
      }
    },
    watch: {
      files:  ['<%= jshint.files %>'],
      tasks: ['jshint', 'browserify', 'uglify'],
      options: {
        livereload: true
      }
    },
    open: {
      all: {
        path: 'http://localhost:8080/examples/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-livereload');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  // Default task(s).
  grunt.registerTask('default', [
    'express',
    'open',
    'watch',
  ]);

  grunt.registerTask('build', [
    'jshint',
    'browserify',
    'uglify'
  ]);

  grunt.registerTask('lint', ['jshint']);
};
