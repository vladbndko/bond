import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

import config from '../config';
import { server } from './browser';

const src = config.isProd ? './src/images/**/*' : ['./src/images/**/*', './src/demo/**/*'];

const images = (done) => {
  gulp.src(src).pipe(imagemin()).pipe(gulp.dest('./dist/img')).pipe(server.stream());
  done();
};

export default images;
