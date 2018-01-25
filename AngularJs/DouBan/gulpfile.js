// 引入本地安装的插件
var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');// 压缩css
var imagemin = require('gulp-imagemin');// 压缩图片
var uglify = require('gulp-uglify'); // 压缩js
var concat = require('gulp-concat'); // 合并
var htmlmini = require('gulp-htmlmin'); // 压缩html
var rev = require('gulp-rev'); // 增加版本号
var revCollector = require('gulp-rev-collector'); //替换时间戳
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
// 返回值gulp是一个对象，借助此对象可以实现任务清单的定制

// 定义任务(less -> css)
gulp.task('less',function(){
	// gulp.src 指定文件位置
	return gulp.src('./public/less/*.less')
		// gulp-less:less -> css
		.pipe(less())
		// gulp-csso:压缩css
		.pipe(csso())
		.pipe(rev())
		// 存起来
		.pipe(gulp.dest('./release/public/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./release/rev'));
});

// 处理图片
gulp.task('image',function(){
	return gulp.src('./public/images/*')
		.pipe(imagemin({
			progressive: true,// 无损压缩jpg图片
			interlaced: true // 隔行扫描gif进行渲染
		}))
		.pipe(gulp.dest('./release/public/images'));
});

// 压缩js
gulp.task('js',function(){
	return gulp.src('./scripts/*')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./release/js'));
})

// 压缩html
gulp.task('html',function(){
	return gulp.src(['./index.html','./views/*.html'],{base:'./'})
	.pipe(htmlmini({collapseWhitespace:true, removeComments:true, minifyJS:true}))
	.pipe(gulp.dest('./release'));
})

// 替换操作
gulp.task('rev',function(){
	gulp.src(['./release/rev/*.json','./release/*.html'],{base:'./release/'})
		.pipe(revCollector())
		.pipe(gulp.dest('./release'))
})

gulp.task('useref',function(){
	gulp.src('./index.html')
		.pipe(useref())
		.pipe(gulpif('*.js',uglify()))
		.pipe(gulp.dest('./release'));
})

