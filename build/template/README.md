# #{pluginName}

> 这是一个 [vue-cli](https://github.com/vuejs/vue-cli) 项目模板，开发语言为 TypeScript，默认集成 [flagwind-core](https://github.com/flagwind/flagwind-core)、[flagwind-web](https://github.com/flagwind/flagwind-web) 等库，可用于 PC 端项目。

## 如何使用?

首先安装 Vue 官方提供的工具 [vue-cli 3.x](([https://github.com/vuejs/vue-cli](https://cli.vuejs.org/)))

``` bash
npm install -g @vue/cli
```

使用vue cli 3命令创建项目:

``` bash
vue create --preset egova-safety/#{pluginName} my-project
```

## 包含哪些内容?

- `npm run serve` 进入调试模式，默认地址为 `http://localhost:8030`
- `npm run dll` 预打包核心依赖库
- `npm run build` 生产打包

## 多页面如何设置

在项目根目录下有.env.local配置文件，`.env.local`内容如下：

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
npm run dll
```

默认核心库包含如下内容:

- vue
    - vue
    - vue-router
- flagwind
    - @egova/flagwind-core
    - @egova/flagwind-web
    - @egova/flagwind-echarts

## 更新说明

- **2020-02-21**前端iview升级为最新的`view-design`4.x版本，因为iview项目更名了，所以以前`import iview from "iview"`的代码会报错，需要手动把`iview`换成`view-design`.