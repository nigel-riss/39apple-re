var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassModuleImporter = require('sass-module-importer'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');


var sassPath = './src/sass/**/*.scss';
var cssPath = './src/css/';
var htmlPath = './src/*.html';
var jsPath = './src/js';

console.log('watch BY ME');

// sass tasks
gulp.task('sass', function() {
    return gulp.src(sassPath)
        .pipe(sass({ importer: sassModuleImporter() }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(cssPath))
});

gulp.task('sassSync', function() {
    console.log('sass works');
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ importer: sassModuleImporter() }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(cssPath))
        .pipe(browserSync.stream());
});

// watch task
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    watch(htmlPath, function() {
        browserSync.reload();
    });

    watch(sassPath, function() {
        gulp.start('sassSync');
    });
    
    watch(jsPath, function() {
        browserSync.reload();
    })
});