var gulp = require('gulp'),
	 less = require('gulp-less'),
	 browserSync = require('browser-sync'),
	 concat = require('gulp-concat'),
	 uglifyjs = require('gulp-uglifyjs'),
	 cssnano = require('gulp-cssnano'),
	 imagemin = require('gulp-imagemin'),
	 pngquant = require('imagemin-pngquant'),
	 autoprefixer = require('gulp-autoprefixer'),
	 uncss = require('gulp-uncss');


gulp.task('less', function () {
	return gulp.src('src/less/style.less')
		.pipe(less())
		.pipe(autoprefixer(['last 15 versions', '>1%']))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('scripts', function() {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/jquery-ui/jquery-ui.min.js',
		'src/libs/jquery-selectric/public/jquery.selectric.min.js',
		'src/libs/slick.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglifyjs())
	.pipe(gulp.dest('src/js'))
});


gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('img', function (){
	return gulp.src('src/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{
			removeVeiwBox: false
		}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch',['browser-sync', 'less', 'scripts'], function () {
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['img', 'less', 'scripts',], function() {

    var buildCss = gulp.src('src/css/style.css')
	  .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*') 
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

});