var gulp = require ('gulp'),
    postcss = require ("gulp-postcss"),
    cssimport = require ("postcss-import"),
    cssvars = require ("postcss-simple-vars"),
    nestedcss = require ("postcss-nested"),
    autoprefixer = require ("autoprefixer"),
    mixins = require ("postcss-mixins"),
    hexrgba = require ("postcss-hexrgba");

gulp.task("styles", function () {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, mixins, cssvars, nestedcss, hexrgba, autoprefixer]))
        .on ('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
             })
        .pipe(gulp.dest("./app/temp/styles"));
});

