import gulp from 'gulp';

const files = (done) => {
  gulp.src('./src/files/**/*', { base: './src/files' }).pipe(gulp.dest('./dist'));
  done();
};

export default files;
