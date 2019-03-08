const gulp = require('gulp');
const rename = require('gulp-rename');
const less = require('gulp-less');
const scss = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('less', () =>
  gulp
    .src('src/styles/index.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('es')),
);

gulp.task('scss', () =>
  gulp
    .src('src/styles/index.scss')
    .pipe(scss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('es')),
);

gulp.task('babel:lib', () =>
  gulp
    .src('src/**/*.{js,jsx}')
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: 'cjs' }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('lib')),
);

gulp.task('babel:es', () =>
  gulp
    .src('src/**/*.{js,jsx}')
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('es')),
);
