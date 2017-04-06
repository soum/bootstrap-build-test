var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./gulp-config');

gulp.task('mainCss', function() {
    return gulp.src(config.scssMain)
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/stylesheets'],
    }))
    .pipe(gulp.dest(config.build + '/css'));
});

gulp.task('customCss', function() {
    return gulp.src(config.scssCustom)
    .pipe(sass())
    .pipe(gulp.dest(config.build + '/css'));
});


gulp.task('default', ['mainCss', 'customCss']);