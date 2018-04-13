var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps');

/* Plugin for webserver*/
const browserSync = require("browser-sync");
const reload = browserSync.reload;

// sass
gulp.task('sass', function() {
    return gulp.src(['./src/sass/main.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/css'))
        .pipe(notify("--Done--!"))
        .pipe(reload({ stream: true }));
});

//html
gulp.task('html', function() {
    gulp.src(['./src/index.html'])
        .pipe(reload({ stream: true }));

});

//watch
gulp.task('watch', function() {
    gulp.watch(
        [
            './src/sass/main.sass',
            './src/sass/section/*.sass',
            './src/sass/base/*.sass',
        ], ['sass']);

    gulp.watch(['./src/index.html'], ['html']);
});

/*Task for webserver*/
const config = {
    server: {
        baseDir: "./src"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Ivan_Matvieikin"
};
gulp.task('webserver', () => browserSync(config));


gulp.task('default', ['sass', 'html', 'webserver', 'watch']);