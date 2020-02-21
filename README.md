# egova-starter-template

> 系统名称

## 项目结构
```
┌── build                   # webpack脚本
├── config                  # config
├── src                     # main
│    ├── application 		# 程序启动载入处理逻辑
│    ├── assets     		# 可打包资源文件
│    │    ├── images      	# 图片资源
│    │    ├── styles      	# 样式资源
│    ├── common             # common
│    │    ├── mixins      	# vue多页面共用mixins
│    │    └── utils   		# 页面相关样式，页面内单独引用
│    ├── components 		# 项目中共用components
│    ├── models 		    # 项目中模型实体定义
│    ├── routes 		    # vue-router前端路由
│    ├── services 		    # 项目中共用服务定义
│    ├── store              # store
│    │    └── modules      	# 按模块使用
│    ├── types              # d文件定义
│    ├── views              # 业务模块视图定义
│    ├── settings      		# 全局设置
│    └── index.ts           # 入口
│
├── node_modules            # 依赖
├── public                  # 静态文件
│    ├── index.html 		# 程序启动载入处理逻辑
│    └── favicon.ico     	# 程序图标
├── dist                    # 打包之后的文件
├── .editorconfig	        # 通用编辑器配置
├── .gitignore		        # git忽略提交配置
├── .postcssrc.js           # postcss配置
└── package.json            # package info
```

## 多页面如何设置

在项目根目录下有.env`.env`内容如下：

```text
PAGE_MODE=page1
PAGE_JSON=src/pages/index.json
```

PAGE_JSON指向的json定义了多页面入口信息，其中`src/pages/index.json`内容为：

```json
{
    "page1": {
        "name": "page1",
        "entry": "src/pages/page1/main.ts",
        "template": "public/index.html",
        "filename": "page1.html",
        "title": "page1",
        "chunks": ["chunk-vendors", "chunk-common", "page1"]
    },
    "page2": {
        "name": "page2",
        "entry": "src/pages/page2/main.ts",
        "template": "public/index.html",
        "filename": "page2.html",
        "title": "page2",
        "chunks": ["chunk-vendors", "chunk-common", "page2"]
    },
    "index":{
        "name": "index",
        "entry": "src/pages/index/main.ts",
        "template": "public/index.html",
        "filename": "index.html",
        "title": "index",
        "chunks": ["chunk-vendors", "chunk-common", "index"]
    }
}
```

`PAGE_MODE`有以下几种可能

- **all** 表示json所有页面都会起用，生成`index.html,page1.html,page2.html`页面（必须要有一个index.html页面）。
- **空值** 表示不取胜多页面应用，入口为默认的`src/main.ts`。
- **页面名（如:page1）** 表示只启动多页面中的一个页面`page1`作为主入口,并会生成`index.html`页面（不是page1.html）。

## 注意事项

因为采用了 dll 预打包，所以首次（或核心库版本发生变动），需要执行:

``` bash
$ npm run dll
```

> 默认核心库包含如下内容:

- vue
    - vue
    - vue-router
- flagwind
    - flagwind-core
    - @egova/flagwind-web
    - @egova/flagwind-echarts
> 自定义核心库在 `vendor.js` 中配置

如果项目依赖如 `axios`，`lodash` 等库，只需按照如下方式导入即可:

``` js
import axios from "axios";
import lodash from "lodash";
``


## 常用命令

- `npm run dev` 进入调试模式，默认地址为 `http://localhost:8040`
- `npm run lint` 使用 `tslint` 验证源码
- `npm run dll` 预打包核心依赖库
- `npm run build` 生产打包
- `npm run template` 把项目置为vue cli 模版项目并发布至npm上

## 更新说明

- **2020-02-21**前端iview升级为最新的`view-design`4.x版本，因为iview项目更名了，所以以前`import iview from "iview"`的代码会报错，需要手动把`iview`换成`view-design`.
