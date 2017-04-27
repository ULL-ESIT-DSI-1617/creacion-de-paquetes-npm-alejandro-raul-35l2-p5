var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task('debug', shell.task(`node --inspect --debug-brk index.js '{"width":4, "height":6}' 'Triangle'`));

gulp.task('run', shell.task(`node index.js '{"width":10, "height":5}' 'Triangle'`));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));
