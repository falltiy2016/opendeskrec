'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require ('gulp-plumber');
var notify = require ('gulp-notify')
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./*.scss')
   .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(notify("CSS has completed"))
    .pipe(browserSync.reload({
      stream: true
    })
    )});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})
 
gulp.task('watch',['browserSync','sass'], function () {
  gulp.watch(['./*.scss','./*.html'], ['sass']);
});