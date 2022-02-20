const jsFiles = [
    $.path.jquery,
    $.path.js,
];

module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src(jsFiles)
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.gp.babel({presets: ['@babel/preset-env']}))
            .pipe($.gp.concat('all.js'))
            .pipe($.uglify())
            .pipe($.gp.rename('all.min.js'))
            .pipe($.sourcemaps.write(''))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.stream());
    });
};