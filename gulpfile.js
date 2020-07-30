global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    imageminPngquant: require('imagemin-pngquant'),
}