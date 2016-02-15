var gulp = require('gulp')
var webserver = require('gulp-webserver')
var stylus = require('gulp-stylus')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var nib = require('nib')
var minify = require('gulp-minify-css')

gulp.task('server', function() {
  gulp.src('./dist')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('build', function() {
	browserify({
		entries: './src/components/index.jsx',
		extensions: ['.jsx'],
		debug: true
	})
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('stylus', function() {
  gulp.src('./src/styles/style.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true,
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('watch', function() {
  gulp.watch('./src/components/**/*.jsx', ['build'])
  gulp.watch(['./src/styles/**/*.styl', './src/components/**/*.styl'], ['stylus'])
})

gulp.task('default', ['server', 'watch'])
