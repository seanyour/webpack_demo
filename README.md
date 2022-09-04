# webpack_demo
webpack config

```bash
# 初始化项目,生成package.json
yarn init -y
    
# 生成tsconfig.json
tsc --init
```

> webpack

```bash
yarn add -D webpack webpack-cli webpack-dev-server webpack-merge
```

webpack：webpack构建工具

webpack-cli：webpack命令行工具

webpack-dev-server：webpack开发服务器

webpack-merge：用于合并配置

> html

```bash
yarn add html-webpack-plugin -D
```

> css

```bash
yarn add -D css-loader style-loader
```

css-loader： CSS 转化成 CommonJS 模块

style-loader：将CSS文件插入DOM中

> sass

```bash
yarn add -D sass sass-loader
```

sass：

sass-loader：

> postcss

```bash
yarn add -D postcss postcss-loader postcss-preset-env
```

> eslint

```bash
yarn add -D eslint eslint-webpack-plugin  vue-eslint-parser
    
# 创建eslint配置文件
npx eslint --init
```

eslint：js代码格式化

eslint-webpack-plugin：在webpack中使用eslint


> prettier

```bash
yarn add -D pritter eslint-config-prettier eslint-plugin-prettier
```

pritter 

eslint-config-prettier

eslint-plugin-prettier

> style

> typescript

```bash
yarn add -D typescript ts-loader
```

typescript： ts编译器

ts-loader：ts加载器，webpack中编译ts

> postcss

javascript 转换样式的工具

```bash
yarn add postcss 
```

> babel

```bash
yarn add -D @babel/core @babel/cli @babel/preset-env
```