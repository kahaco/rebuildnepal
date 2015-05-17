var gulp = require('gulp');
require('./gulp/tasks/buildjs');

gulp.task('default', ['webpack-prod']);
gulp.task('dev', ['webpack-dev']);
