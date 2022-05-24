import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import strip from 'gulp-strip-comments';

import config from '../config';
import { server } from './browser';

const views = (done) => {
  gulp
    .src('./src/views/*.pug')
    .pipe(gulpIf(config.isDev, plumber()))
    .pipe(pug({
      pretty: config.pug.pretty,
    }))
    .pipe(gulpIf(!config.pug.pretty, strip()))
    .pipe(gulp.dest('./dist'))
    .pipe(server.stream());
  done();
};

export default views;
