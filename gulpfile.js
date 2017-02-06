var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
require('dotenv').config();

gulp.task('tag', function () {
    var newVersionTag = '//<-- version ' + process.env.scriptversion + ' -->'
    gulp.src(['src/*.js'], {base: './'})
        .pipe($.injectString.replace('//<-- version .* -->', newVersionTag))
        .pipe($.debug())
        .pipe(gulp.dest('./'));
});