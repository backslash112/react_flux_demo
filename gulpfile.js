var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
gulp.task('default', function () { return browserify('./source/app.js').transform(reactify).bundle() .pipe(source('snapterest.js')) .pipe(gulp.dest('./build/'));
});