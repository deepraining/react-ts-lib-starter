const gulp = require('gulp');
const rename = require('gulp-rename');
const less = require('gulp-less');
const scss = require('gulp-sass');
const babel = require('gulp-babel');
const typescript = require('gulp-typescript');

const ts = typescript.createProject('tsconfig.json');
const tsd = typescript.createProject('tsconfig.d.json');

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
    .src('src/**/*.{ts,tsx}')
    .pipe(ts())
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
    .src('src/**/*.{ts,tsx}')
    .pipe(ts())
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

gulp.task('d.ts', () =>
  gulp
    .src('src/**/*.{ts,tsx}')
    .pipe(tsd())
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('es')),
);
