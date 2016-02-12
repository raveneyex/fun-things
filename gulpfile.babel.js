'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';

const sourceFiles = ['es6/**/*.js'];
let transpileSources = () => {
    return gulp.src(sourceFiles)
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('es5/'));
};
gulp.task('scripts', transpileSources);