'use strict';
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var cssnext     = require('gulp-cssnext');

gulp.task('browserify', function() {
  browserify('./src/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/jsx/**/*.jsx', ['browserify', 'reload']);
  gulp.watch('./src/app.jsx', ['browserify', 'reload']);
  gulp.watch('./src/**/*.scss', ['scss']);
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: "./"
      }
    });
});

gulp.task('scss', function() {
  gulp.src("src/scss/**/*.scss")
    .pipe(sass())
    .on('error', function(err) {
      console.log(err.message)
    })
    .pipe(cssnext())
    .pipe(gulp.dest("dist/assets/css/"));
});

gulp.task('default', ['browserify', 'watch', 'scss', 'browser-sync']);
