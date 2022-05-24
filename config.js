import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`) });

const config = {
  env: process.env.NODE_ENV,
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  pug: {
    pretty: process.env.PUG_PREYTY === 'true',
  },
  sass: {
    sourcemaps: process.env.SASS_SOURCEMAPS === 'true',
    outputStyle: process.env.SASS_OUTPUT_STYLE,
  },
  js: {
    sourcemaps: process.env.JS_SOURCEMAPS === 'true',
    minify: process.env.JS_MINIFY === 'true',
  },
};

export default config;
