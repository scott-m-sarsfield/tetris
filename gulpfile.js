var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var notifierReporter = require('mocha-notifier-reporter');
var babel = require('gulp-babel');

gulp.task('default',['mocha','javascript','static-files'],function(){
    gulp.watch(['src/**','www/**'],['javascript','static-files']);
    gulp.watch(['src/**','test/**'],['mocha','javascript']);
});

gulp.task('javascript',function(){
    var b = browserify({
        entries:"./src/app.js",
        debug:true
    });

    return b.bundle()
        .pipe(source('app.js')) // app.js is a pretend file name, BTW
        .pipe(buffer())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('mocha',function(){
    return gulp.src(['./test/*.js'],{read:false})
        .pipe(mocha({
            reporter:notifierReporter.decorate('spec')
        }));
        //.pipe(mocha({reporter:'mocha-notifier-reporter'}));
        //.on('error',gutil.log);
});

gulp.task("static-files",function(){
    return gulp.src(['./www/**'])
        .pipe(gulp.dest("./dist/"));
});


gulp.task('notify',function(){
    return gulp.src(['./src/**'])
        .pipe(notify("Hello Gulp!"));
});
