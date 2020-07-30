const jsFiles = [$.path.jQuery, $.path.js]

module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src(jsFiles)
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({presets: ['@babel/preset-env']}))
            .pipe($.gp.concat('all.js'))
            .pipe($.gp.uglify())
            .pipe($.gp.rename('all.min.js'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.dest('build/js'))
            .pipe($.gp.browserSync.stream())
    })
}