'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var inlinesource = require('gulp-inline-source'),
    minifyHTML = require('gulp-minify-html'),
    rename = require('gulp-rename');

module.exports = function (gulp, devPaths) {
  gulp.task('inline', function () {
    return gulp.src('build.html')
      .pipe(inlinesource())
      .pipe(minifyHTML())
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./'));
  });
}
