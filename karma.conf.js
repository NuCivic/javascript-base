// karma.conf.js
module.exports = function(config) {
  'use strict';

  config.set({
    frameworks: ['mocha', 'chai', 'expect'],
    files: [
      // Put dependencies here.
      'dist/**/*.js',
      'test/**/*.js'
    ],
    reporters: ['mocha'],
    browsers: ['PhantomJS']
  });
}
