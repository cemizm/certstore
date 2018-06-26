import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task('build', gulpSequence(
  'clean', [
    'manifest',
    'grpc',
    'scripts',
    'angular',
    'pages',
    'locales',
    'images',
    'fonts',
    'chromereload'
  ]
))