'use strict';
var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('browserify', function() {
  browserify('./app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./assets/js/'))
});

gulp.task('watch', function() {
  gulp.watch('./*.jsx', ['browserify'])
});

gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: "./"
      }
    });
});

gulp.task('default', ['browserify', 'watch', 'browser-sync']);
