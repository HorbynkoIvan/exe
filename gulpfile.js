global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    imageminPngquant: require('imagemin-pngquant'),
    path: {
        config: './gulp/config.js',
        jQuery: './js/jquery.js',
        js: './js/**/*.js',
    }
}

//use loop for connecting all tasks
$.path.config.forEach(function(path) {
    require(path)()
})