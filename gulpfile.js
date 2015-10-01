var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

gulp.task('log', function(){
	gutil.log('workflows are awesome!');
});

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = ['components/scripts/image-preview.js', 'components/scripts/template.js', 'components/scripts/tagline.js'];

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
		.pipe(coffee({bare : true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'));
});

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('js.js'))
		.pipe(gulp.dest('builds/development/js'))
});