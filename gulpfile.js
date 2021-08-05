`use strict`;

const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass");
const tildeImporter = require("node-sass-tilde-importer");
const browserSync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const del = require("del");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const atimport = require("postcss-import");
const nunjucksRender = require("gulp-nunjucks-render");

let production = false;

const file = {
  html: "src/**/*.html",
  scss: "src/assets/scss/**/*.scss",
  js: "src/assets/js/src/**/*.js",
  components: "src/components/**/*.js",
  tailwind: "src/assets/tailwind/tailwind.css"
};

const theSaas = {
  js: "src/assets/js/src/page.js",
  scss: "src/assets/scss/page.scss"
};

const dir = {
  css: "dist/assets/css/",
  js: "dist/assets/js/",
  font: "dist/assets/fonts/",
  components: "dist/components/"
};

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync({
    server: "dist/"
  });

  gulp.watch(file.scss, theSaasScss); // watch changes to theSaas-related scss files
  gulp.watch(file.js, gulp.series(theSaasJs, reload)); // watch changes to theSaas-related js files
  gulp.watch("v2/build/**/*", gulp.series(reactApp, reactEntryPoint, reload)); // watch react build folder
  gulp.watch(file.html, gulp.series(nunjucks, reload)); // watch changes to html files
  done();
}

function nunjucks() {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("src/**/*.+(html|nunjucks)")
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["src/templates"]
        })
      )
      // output files in app folder
      .pipe(gulp.dest("dist"))
  );
}

function tailwindStyles() {
  return gulp
    .src(file.tailwind)
    .pipe(postcss([atimport(), tailwindcss("./tailwind.config.js")]))
    .pipe(gulp.dest(dir.css));
}

// copy contents of create-react-app build folder to ./dist/ (except for index.html)
function reactApp() {
  return gulp
    .src(["v2/build/**/*", "!v2/build/index.html"])
    .pipe(gulp.dest("dist/"));
}

// copy the built index.html from create-react-app to src/v2/ folder
function reactEntryPoint() {
  return gulp.src("v2/build/index.html").pipe(gulp.dest("src/v2/"));
}

function theSaasScss() {
  let stream = gulp
    .src(theSaas.scss)
    .pipe(sourcemaps.init())
    .pipe(rename({ suffix: ".min" }))
    .pipe(
      sass({ importer: tildeImporter, outputStyle: "compressed" }).on(
        "error",
        sass.logError
      )
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(dir.css))
    .pipe(browserSync.stream());

  // Create unminified version if it's in production mode
  if (production) {
    stream = gulp
      .src(theSaas.scss)
      .pipe(sourcemaps.init())
      .pipe(sass({ importer: tildeImporter }).on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(dir.css));
  }
  return stream;
}

function theSaasJs() {
  return gulp
    .src(theSaas.js)
    .pipe(
      webpack({
        mode: "none",
        devtool: "source-map",
        output: {
          filename: "page.min.js"
        }
      })
    )
    .pipe(gulp.dest(dir.js));
}

function theSaasJsProductionMinified() {
  return gulp
    .src(theSaas.js)
    .pipe(
      webpack({
        mode: "production",
        devtool: "source-map",
        output: {
          filename: "page.min.js"
        },
        performance: {
          hints: false
        }
      })
    )
    .pipe(gulp.dest(dir.js));
}

function theSaasJsProductionExpanded() {
  return gulp
    .src(theSaas.js)
    .pipe(
      webpack({
        mode: "none",
        devtool: "source-map",
        output: {
          filename: "page.js"
        }
      })
    )
    .pipe(gulp.dest(dir.js));
}

/*
|--------------------------------------------------------------------------
| Copy
|--------------------------------------------------------------------------
|
*/
function copyFonts(done) {
  //gulp.src( 'node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/*').pipe(gulp.dest(dir.font));
  gulp.src("node_modules/font-awesome/fonts/*").pipe(gulp.dest(dir.font));
  gulp
    .src("node_modules/themify-icons/themify-icons/fonts/*")
    .pipe(gulp.dest(dir.font));
  gulp.src("node_modules/et-line/fonts/*").pipe(gulp.dest(dir.font));
  done();
}

function distCopy() {
  return gulp
    .src([
      "src/**/*",
      "!src/assets/{js/src,plugin/thesaas,scss}{,/**}",
      "!src/v2/**/*",
      "!src/**/*.html"
    ])
    .pipe(gulp.dest("dist/"));
}

/*
|--------------------------------------------------------------------------
| Clean /dist directory
|--------------------------------------------------------------------------
|
*/
function distClean() {
  return del("dist/");
}

/*
|--------------------------------------------------------------------------
| Img
|--------------------------------------------------------------------------
|
*/
// eslint-disable-next-line no-unused-vars
function img() {
  return gulp
    .src("src/assets/img/**/*.{jpg,jpeg,png,gif}")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/img/"));
}

/*
|--------------------------------------------------------------------------
| Tasks
|--------------------------------------------------------------------------
|
*/
function setProductionMode(done) {
  production = true;
  done();
}

function setDevMode(done) {
  production = false;
  done();
}

exports.react = gulp.series(reactApp, reactEntryPoint);
exports.dev = gulp.series(copyFonts, theSaasScss, theSaasJs);
exports.dist = gulp.series(
  setProductionMode,
  distClean,
  copyFonts,
  exports.react,
  theSaasScss,
  nunjucks,
  tailwindStyles,
  theSaasJsProductionMinified,
  theSaasJsProductionExpanded,
  distCopy,
  setDevMode
);
exports.watch = gulp.series(distCopy, nunjucks, serve);
exports.buildandwatch = gulp.series(exports.dist, exports.watch);
exports.default = exports.watch;
exports.nunjucks = nunjucks;
