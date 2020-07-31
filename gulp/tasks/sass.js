module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('sass/style.scss')
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())//convert to css
            .pipe($.gp.autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe($.gp.csso())//minificate
            .pipe($.gp.rename('style.min.css'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.dest('build/css'))// create folder and put file there
            .pipe($.gp.browserSync.stream())//restart browser
    })
}