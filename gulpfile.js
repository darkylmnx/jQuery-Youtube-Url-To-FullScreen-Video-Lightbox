var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('css', function() {
  return gulp.src('./src/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
  return gulp.src('./src/*.js')
    .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
    .pipe(rename('jquery.yu2fvl.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['lint', 'css', 'compress'], function (){

});
