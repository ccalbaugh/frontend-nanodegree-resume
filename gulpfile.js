var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles'], function() {
	// the second arg below can either be a CB or an array with a set of tasks
	gulp.watch('sass/**/*.scss', ['styles']);

	browserSync.init({
		server: './'
	});
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		// Instead of killing the build, gulp will log the error and continue as usual
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ // tells which browser versions to prefix
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'));
});