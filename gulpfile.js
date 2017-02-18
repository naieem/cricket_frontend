var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});
gulp.task('css', function () {
  gulp.src('./app/***/*.css')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/**/*.css'], ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);
});
 
gulp.task('default', ['connect', 'watch']);