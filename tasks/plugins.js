import gulp from 'gulp';

const plugins = (done) => {
  gulp
    .src('./src/plugins/**/*.{css,js,eot,svg,ttf,woff,woff2}', { base: './src' })
    .pipe(gulp.dest('./dist'));
  done();
};

export default plugins;
