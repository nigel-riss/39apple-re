var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

// inject task (prolly not needed)
gulp.task('cssInject', function() {
    return gulp.src('./src/css/styles.css')
        .pipe(browserSync.stream());
});

// watch task
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    watch('htmlPath', function() {
        browserSync.reload();
    });

    watch('sassPath', function() {
        gulp.start('sassSync');
    })
});