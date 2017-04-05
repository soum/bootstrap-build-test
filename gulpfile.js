var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./gulp-config');

gulp.task('default', function () { console.log('Hello Gulp!') });

gulp.task('sass', function(){
  return gulp.src(config.sassSource)
    .pipe(sass())
    .pipe(gulp.dest(config.cssDest))
});
