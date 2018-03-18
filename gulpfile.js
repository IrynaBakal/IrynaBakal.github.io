var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    gulp.src('./project/src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./project/dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./project/**/*.scss', ['sass']);
});

gulp.task('imagemin', () =>
    gulp.src('./project/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./project/dist/img'))
);