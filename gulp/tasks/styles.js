var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassModuleImporter = require('sass-module-importer'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

// sass tasks
gulp.task('sass', function() {
    return gulp.src(sassPath)
        .pipe(sass({ importer: sassModuleImporter }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest())
});

gulp.task('sassSync', function() {
    console.log('sass works');
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ importer: sassModuleImporter}))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(cssPath))
        .pipe(browserSync.stream());
});