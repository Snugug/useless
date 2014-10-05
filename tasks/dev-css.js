'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var paths = require('compass-options').paths(),
    target = require('gulp-css-target'),
    uncss = require('gulp-uncss'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

//////////////////////////////
// Internal Vars
//////////////////////////////
var workPaths = [
  paths.css + '/**/*.css'
];

module.exports = function (gulp, devPaths) {
  gulp.task('dev-css', function () {
    devPaths = devPaths || workPaths;

    return gulp.src(devPaths)
      // .pipe(target())
      .pipe(uncss({
        html: ['build.html']
      }))
      .pipe(gulp.dest(paths.css + '/'))
      .pipe(reload({stream: true}));
  });
}
