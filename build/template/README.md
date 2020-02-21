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