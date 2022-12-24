import gulp from "gulp";
import {deleteAsync} from 'del';
import replace from "gulp-replace";
import rename from 'gulp-rename';
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from 'browser-sync';
import sass from 'gulp-dart-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import cssSort from 'gulp-csscomb';
import newer from "gulp-newer";
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import data from 'gulp-data';
import fs from 'fs';
import render from 'gulp-nunjucks-render';
import htmlmin from 'gulp-htmlmin';
import { dir } from "console";
import sourcemaps from "gulp-sourcemaps";


/**
 *  Основные директории
 */
const dirs = {
  src: 'src',
  dest: 'build'
};

const path = {
  build: {
    js: `${dirs.dest}/js/`,
    css: `${dirs.dest}/css/`,
    //html: `${dirs.dest}/`,
    files: `${dirs.dest}/files/`,
    images: `${dirs.dest}/img/`,
    fonts: `${dirs.dest}/fonts/`,
    pages: `${dirs.dest}/`,
  },
  src: {
    // js: `${dirs.src}/js/app.js`,
    js: `${dirs.src}/js/**/*.js`,
    jsVendor: `${dirs.src}/js/vendor/*.js`,
    scss: `${dirs.src}/scss/style.scss`,
    files: `${dirs.src}/files/**/*.*`,
    images: `${dirs.src}/img/**/*.{jpg,png,jpeg,gif}`,
    svg: `${dirs.src}/img/**/*.svg`,
    sprite: `${dirs.src}/img/sprite/*.svg`,
    fonts: `${dirs.src}/fonts/*.{woff,woff2}`,
    views: `${dirs.src}/views/`,
    pages: `${dirs.src}/views/pages/*.j2`,
    json: `${dirs.src}/views/data.json`,
    favicon: `${dirs.src}/img/*.ico`
  },
  watch: {
    js: `${dirs.src}/js/**/*.js`,
    scss: `${dirs.src}/scss/**/*.scss`,
    files: `${dirs.src}/files/**/*.*`,
    images: `${dirs.src}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    sprite: `${dirs.src}/img/sprite/*.svg`,
    svg: `${dirs.src}/img/**/*.svg`,
    views: `${dirs.src}/views/**/*.j2`,
    json: `${dirs.src}/views/data.json`
  },
  clean: `${dirs.dest}`,
}

// Задачи

// Копирование файлов
const copy = () => {
  return gulp.src(path.src.files)
  .pipe(gulp.dest((path.build.files)));
}

// Копирование фавиконки
export const copyFavicon = () => {
  return gulp.src(path.src.favicon)
  .pipe(gulp.dest(dirs.dest));
}

// Очистка папки со сборкой
export const clean = () => {
  return deleteAsync(path.clean);
}

// Сборка страничек в html
export const views = () => {
  return gulp.src(path.src.pages)
    .pipe(data((file) => {
      return JSON.parse(
        fs.readFileSync(path.src.json)
      );
    }))
    .pipe(render({
      path: [`${path.src.views}`]
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(gulp.dest(path.build.pages))
    .pipe(browserSync.stream());
}

// Сортировка стилей
export const scssSort = () => {
  return gulp.src(path.watch.scss)
    .pipe(cssSort())
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
}

// Сборка стилей
const styles = () => {
  var plugins = [
      autoprefixer(),
      cssnano()
  ];
  return gulp.src(path.src.scss, {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(gulp.dest(path.build.css, {sourcemaps: true}))
    .pipe(browserSync.stream());
}

// Сборка скриптов
const scripts = () => {
  return gulp.src([path.src.js, `!${path.src.jsVendor}`])
    .pipe(plumber(
      notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/preset-env']
      }))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
    .pipe(sourcemaps.write('../maps/js'))
    .pipe(gulp.dest(path.build.js))
    .pipe(gulp.src(path.src.jsVendor))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
}

const server = (done) => {
  browserSync.init({
    server: path.build.pages,
    notify: false,
    port: 3000
  });
}

const imagesCopy = () => {
  return gulp.src(path.src.images)
    .pipe(plumber(
      notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(newer(path.build.images))
    .pipe(gulp.dest(path.build.images))
    .pipe(browserSync.stream());
}

// Оптимизация и копирование картинок в папку сборки
const images = () => {
  return gulp.src(path.src.images)
    .pipe(plumber(
      notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(newer(path.build.images))
    .pipe(squoosh())
    .pipe(gulp.dest(path.build.images))
    .pipe(browserSync.stream());
}

const imagesWebp = () => {
  return gulp.src(path.src.images)
    .pipe(plumber(
      notify.onError({
        title: "IMAGES-WEBP",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(newer(path.build.images))
    .pipe(squoosh({
      webp: {
        quality: 90
      }
    }))
    .pipe(gulp.dest(path.build.images))
    .pipe(browserSync.stream());
}

// Оптимизация svg и копирование картинок в папку сборки
const svg = () =>{
  return gulp.src([path.src.svg, `!${path.src.sprite}`])
    .pipe(svgo())
    .pipe(gulp.dest(path.build.images));
}

// Создание спрайта
const sprite = () => {
  return gulp.src(path.src.sprite)
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(path.build.images));
}

const fonts = () => {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
}

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  // gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.views, views);
  gulp.watch(path.watch.json, views);
  gulp.watch(path.watch.scss, styles);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.images, imagesCopy);
  // gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.images, imagesWebp);
  gulp.watch(path.watch.sprite, sprite);
  gulp.watch([path.src.svg, `!${path.src.sprite}`], svg);
}

const mainTasks = gulp.parallel(copy, copyFavicon, fonts, views, styles, scripts, images, imagesWebp, sprite, svg);
const devTasks = gulp.parallel(copy, copyFavicon, fonts, views, styles, scripts, imagesCopy, imagesWebp, sprite, svg);

// Построение сценариев выполнения задач
export const dev = gulp.series(clean, devTasks, gulp.parallel(watcher, server));
export const build = gulp.series(clean, mainTasks);

// Задача по умолчанию
gulp.task('default', dev);
