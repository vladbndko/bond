import gulp from 'gulp';

import views from './views';
import styles from './styles';
import script from './scripts';
import images from './images';
import plugins from './plugins';
import files from './files';


export default gulp.series(views, styles, script, images, plugins, files);
