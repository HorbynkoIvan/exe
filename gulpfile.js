global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    sass:require('gulp-sass')(require('sass')),
    sourcemaps: require('gulp-sourcemaps'),
    plumber:require('gulp-plumber'),
    autoprefixer:require('gulp-autoprefixer'),
    csso:require('gulp-csso'),
    uglify:require('gulp-uglify'),
    path: {
        config: require('./gulp/config'),
        jquery: './js/jquery.js',
        js: './js/**/*.js',
    }
};

//use loop for connecting all tasks
$.path.config.forEach(function(path) {
    require(path)()
})

