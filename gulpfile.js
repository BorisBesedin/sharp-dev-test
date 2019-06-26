"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("clean", function() {
  return del("build")
});

gulp.task("copy", function() {
  return gulp.src([
    "source/img/**",
    "source/js/**",
    "source/*.html",
    "source/css/normalize.css"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"))
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css"
));

gulp.task("start", gulp.series("css", "server"));
