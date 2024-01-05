# 第一步

`npx create-react-app app --template typescript`
创建 app

# 第二步

`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
react 项目内部支持 eslint, 安装这俩插件将格式化权限交给 prettier

# 第三步

配置保存时候格式化, 以及默认格式化插件 参考 Page.113

# 第四步

在 package.json 文件中, 配置 eslint 的 prettier 插件: "plugin:prettier/recommended"
同时配置 .prettierrc.json

> 开始安装 tailwind

`npm i -D tailwindcss postcss autoprefixer`

1. taiwindcss 是本体
2. postcss 是内嵌进 react 的库
3. autoprefixer 是增加浏览器前缀的的一个插件, tailwindcss 推荐的

> 配置 tailwind

`npx tailwindcss init -p`
初始化配置信息 Page.168

在 index.css中引入指令

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
