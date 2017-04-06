var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./gulp-config');

gulp.task('css', function() {
    return gulp.src(config.scssMain)
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

// gulp.task('fonts', function() {
//     return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
//     .pipe(gulp.dest(config.publicDir + '/fonts'));
// });

gulp.task('default', ['css']);