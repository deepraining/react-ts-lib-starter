# react-ts-lib-starter

[English Documentation](./README.en.md)

一个用于快速创建 React 组件库的模板脚手架，使用 Typescript 与 Storybook 构建.

## 快速开始

```
git clone https://github.com/senntyou/react-ts-lib-starter.git --depth=1

cd react-ts-lib-starter

npm install             # 安装依赖

npm run storybook       # 使用 storybook 开发组件

npm run build           # 构建发布文件
```

## 特性

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) 样式语言支持.
- [TypeScript](http://www.typescriptlang.org/) 语法, [jest](https://jestjs.io/en/) + [enzyme](https://github.com/airbnb/enzyme) 测试支持.
- 使用 [storybook](https://storybook.js.org/) 开发、预览组件.

## 项目

```
- src
  - index.{ts,tsx}           # ts 入口文件
  - styles
    - index.{less,scss}      # 样式入口文件

- .storybook                 # for storybook
- stories                    # for storybook
```

样式默认使用 `less` 语言, 如果你想使用 `scss` 语言, 可以修改 `package.json`:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```
