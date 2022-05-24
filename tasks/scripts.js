import gulp from 'gulp';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';

import config from '../config';
import { server } from './browser';

const scripts = (done) => {
  gulp
    .src(['./src/scripts/script.js'])
    .pipe(gulpIf(config.isDev, plumber()))
    .pipe(gulpIf(config.js.minify, uglify()))
    .pipe(gulp.dest('./dist/js'))
    .pipe(server.stream());
  done();
};

export default scripts;
