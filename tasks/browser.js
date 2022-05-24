import browserSync from 'browser-sync';

export const server = browserSync.create();

export const browser = (done) => {
  server.init({
    server: {
      baseDir: './dist',
    },
    notify: false,
    open: false,
    cors: true,
    ghostMode: { clicks: false },
  });
  done();
};
