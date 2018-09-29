'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task("default", function() {
    gulp.src('./node_modules/foundation-sites/scss/*.scss')
        .pipe(sass({
            includePaths: ['node_modules/foundation-sites/scss']
          }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});