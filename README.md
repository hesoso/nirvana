# Nirvara🚀

## 项目简介

🚀🚀🚀 Nirvara 是一个使用 React 18 构建的后台管理系统框架，整合了 React-Router v6、React Hooks、Redux & Redux-Toolkit、TypeScript、Vite 和 Ant-Design。它提供了一个现代化、高效的开发环境，适用于快速构建专业的后台管理界面。

## Git 地址

[GitHub - Nirvara 项目地址](https://github.com/hesoso/toy)

## 项目功能

- ✨ React 18 & React-Router v6：最新的 React 版本和路由管理
- ✨ React Hooks & Redux-Toolkit：简化的状态管理
- ✨ TypeScript：增强代码的稳定性和可维护性
- ✨ Ant-Design v5：自由度极高的主题定制功能
- ✨ Vite：快速的构建和热重载，vite-plugin-mock 提供 mock 数据
- ✨ 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范
- ✨ 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 其他 mock 数据解决方案

- [fastmock](https://www.fastmock.site/)
- [mengxuegu](https://mock.mengxuegu.com/)

## 安装与使用 📑

下面是如何在本地环境安装和运行你的项目的步骤：

```bash
# 克隆仓库
git clone https://github.com/hesoso/toy.git

# 进入项目目录
cd nirvana

# 安装依赖
yarn install

# 启动项目
yarn start
```

## 其它命令

```bash
#构建生产版本。
yarn build

# 校验代码规范
yarn lint

# 校验css规范
yarn lint:css
```

## 提交规范

为了确保代码质量和提交的一致性，提交代码需遵循以下规范：

- 功能提交：feat: 新功能描述
- 修复提交：fix: 修复问题描述
- 文档提交：docs: 更新文档描述
- 样式提交：style: 样式更改（不影响代码运行的变动）
- 详见🔗 [提交规范官方配置文件](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js)

## 文件目录说明 📚

```text
Nirvara
├─ .github                # 用于指定 Release-Please Action 配置
├─ .husky                 # 用于配置Git钩子（如pre-commit）的目录
├─ mock                   # 模拟接口响应及动态随机数据
├─ public
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 基础配置项
│  ├─ constant            # 项目中用到的一些常量
│  ├─ hooks               # 自定义钩子
│  ├─ http                # axios二次封装
│  ├─ routes              # 路由管理
│  ├─ store               # redux store
│  ├─ typings             # ts 声明文件
│  ├─ utils               # 工具集合
│  ├─ views               # 所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ main.tsx            # 入口文件
│  └─ env.d.ts            # vite 声明文件
├─ .env.development       # 开发环境配置
├─ .eslintrc.cjs          # eslint 校验代码配置
├─ .gitignore             # git 忽略配置
├─ .stylelintignore       # stylelint 样式校验忽略配置
├─ .stylelintrc.json      # stylelint 样式校验配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ package.json           # 依赖包管理
├─ README.md              # 描述和解释项目的文档
├─ SCRIPTS.md             # 对于一些脚本命令的总结
├─ TODOS.md               # 用于记录一些需要在接下来去完善的事情
├─ tsconfig.json          # typeScript 项目标准配置文件
├─ tsconfig.node.json     # 专门为 Node.js 环境定制的 typeScript 配置文件
└─ vite.config.ts         # vite 配置
```

## 浏览器支持

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。
- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

| ![IE](https://i.imgtg.com/2023/04/11/8z7ot.png) | ![Edge](https://i.imgtg.com/2023/04/11/8zr3p.png) | ![Firefox](https://i.imgtg.com/2023/04/11/8zKiU.png) | ![Chrome](https://i.imgtg.com/2023/04/11/8zNrx.png) | ![Safari](https://i.imgtg.com/2023/04/11/8zeGj.png) |
| :---------------------------------------------: | :-----------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------: |
|                   not support                   |                  last 2 versions                  |                   last 2 versions                    |                   last 2 versions                   |                   last 2 versions                   |

## 联系方式

如果你有任何问题或建议，可以直接提issues，或者通过邮箱联系我：

- Github: https://github.com/hesoso/nirvana/issues
- Email: 240502633@qq.com
