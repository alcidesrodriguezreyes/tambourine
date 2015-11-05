'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');



gulp.task('sass', function(){
    gulp.src('./stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});
 
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});
 
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch('./stylesheets/**/*.scss', ['sass']);
});
 
gulp.task('default', ['connect', 'watch']);