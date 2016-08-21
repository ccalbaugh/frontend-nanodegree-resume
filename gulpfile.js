var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var bsConfig = require('gulp-bootstrap-configurator');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

gulp.task('default', ['styles', 'make-bootstrap-css', 'scripts-dist', 'lint'], function() {
	// the second arg below can either be a CB or an array with a set of tasks
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('./build/index.html')
		.on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		// Instead of killing the build, gulp will log the error and continue as usual
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({ // tells which browser versions to prefix
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
	return gulp.src(['**/*.js'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});

gulp.task('make-bootstrap-css', function() {
	return gulp.src("./config.json")
		.pipe(bsConfig.css())
		.pipe(gulp.dest("dist/css"))
});

gulp.task('make-bootstrap-js', function() {
	return gulp.src("./config.json")
		.pipe(bsConfig.js())
		.pipe(gulp.dest("dist/js"))
});

gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});