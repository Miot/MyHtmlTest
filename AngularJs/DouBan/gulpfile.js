var gulp = require('gulp'),
	less = require('gulp-less'),
	csso = require('gulp-csso'),
	rev = require('gulp-rev'),
	imagemin = require('gulp-imagemin'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	revCollector = require('gulp-rev-collector');

// 处理css
gulp.task('css',function(){
	return gulp.src('./public/less/main.less')
		.pipe(less())
		.pipe(csso())
		// 改名
		.pipe(rev())
		.pipe(gulp.dest('./release/public/css'))
		// 收集改名规则
		.pipe(rev.manifest())
		.pipe(rename('css-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});

// 处理图片
gulp.task('image',function(){
	return gulp.src('./public/images/*')
		.pipe(imagemin())
		.pipe(rev())
		.pipe(gulp.dest('./release/public/images'))
		.pipe(rev.manifest())
		.pipe(rename('image-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});

// 处理js
gulp.task('useref',function(){
	return gulp.src('./index.html')
		.pipe(useref())
		.pipe(gulpif('*.js',uglify()))
		.pipe(gulpif('*.js',rev()))
		.pipe(gulp.dest('./release'))
		.pipe(rev.manifest())
		.pipe(rename('js-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});

// 移动不需要更改的文件
gulp.task('other',function(){
	return gulp.src(['./api/*','./public/fonts/*','./public/libs/*','./views/*.html','./favicon.ico'],{base:'./'})
		.pipe(gulp.dest('./release'));
});

// 替换
gulp.task('rev',['css','image','useref'],function(){
	gulp.src(['./release/rev/*.json','./release/index.html'])
		.pipe(revCollector())
		.pipe(gulp.dest('./release'));
});

//总和
gulp.task('default',['rev','other']);