var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var cssnext = require('cssnext');

gulp.task('styles', function() {
  var processors = [
  	cssImport,
  	cssnext({
  		'browsers': ['last 2 versions', 'ie 9'],
      'compress': true
  	})
  ];

  return gulp.src('./css/all.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));

});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['styles', 'watch']);