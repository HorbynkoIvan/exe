module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('sass/style.scss')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer({
                cascade: false
            }))
            .pipe($.csso())
            .pipe($.gp.rename('style.min.css'))
            .pipe($.sourcemaps.write(''))
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.stream());
    });
};