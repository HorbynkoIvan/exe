module.exports = function () {
    $.gulp.task('copy', function () {
        return $.gulp.src(
            [
                'fonts/**/*.{woff,woff2}',
                'img/**',
                '*.html'
            ],
            {base: '.'}
        )
            .pipe($.gp.dest('build'))// create folder and put file there
    })
}