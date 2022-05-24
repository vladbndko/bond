import gulp from 'gulp';

import { browser } from './browser';
import views from './views';
import styles from './styles';
import script from './scripts';
import images from './images';
import plugins from './plugins';
import files from './files';

const development = (done) => {
  gulp.watch('./src/views/**/*.pug', views);
  gulp.watch(['./src/styles/**/*.scss'], styles);
  gulp.watch(['./src/scripts/**/*.js'], script);
  gulp.watch('./src/images/**/*', images);
  gulp.watch('./src/plugins/**/*.{css,js,eot,svg,ttf,woff,woff2}', plugins);
  gulp.watch('./src/files/**/*', files);
  done();
};

export default gulp.series(views, styles, script, images, plugins, files, gulp.parallel(browser, development));
