import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sassGlob from 'gulp-sass-glob';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import dartSass from 'sass';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';

import config from '../config';
import { server } from './browser';

const sass = gulpSass(dartSass);

const plugins = {
  development: [autoprefixer],
  production: [autoprefixer, cssnano],
};

const styles = (done) => {
  gulp
    .src(['./src/styles/style.scss', './src/styles/dark.scss', './src/styles/themes/*.scss'])
    .pipe(gulpIf(config.isDev, plumber()))
    .pipe(gulpIf(config.sass.sourcemaps, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: config.sass.outputStyle,
      }).on('error', sass.logError),
    )
    .pipe(postcss(plugins[config.env]))
    .pipe(gulpIf(config.sass.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest('./dist/css'))
    .pipe(server.stream());
  done();
};

export default styles;
