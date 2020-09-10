module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      "@egova/flagwind-core": "^1.1.4",
      "@egova/flagwind-echarts": "^1.0.10",
      "@egova/flagwind-web": "^1.0.23",
      axios: "^0.19.2",
      echarts: "^4.6.0",
      equals: "^1.0.5",
      "js-cookie": "^2.2.1",
      "lodash.debounce": "^4.0.8",
      "view-design": "^4.1.2",
      vue: "^2.6.11",
      "vue-class-component": "^7.2.3",
      "vue-property-decorator": "^8.4.0",
      "vue-router": "^3.1.5",
      vuex: "^3.1.2"
    },
    devDependencies: {
      "@egova/vue-cli-plugin-dll": "^1.1.7",
      "@types/echarts": "^4.4.3",
      "@types/js-cookie": "^2.2.4",
      "@types/node": "^13.7.4",
      "@vue/cli-plugin-babel": "^4.2.2",
      "@vue/cli-plugin-typescript": "^4.2.2",
      "@vue/cli-service": "^4.2.2",
      "add-asset-html-webpack-plugin": "^3.1.3",
      "compression-webpack-plugin": "^3.1.0",
      "friendly-errors-webpack-plugin": "^1.7.0",
      "raw-loader": "^1.0.0",
      "node-sass": "^4.14.1",
      "sass-loader": "^8.0.2",
      "style-resources-loader": "^1.3.3",
      "tslint-config-flagwind": "^1.0.1",
      "tslint-loader": "^3.5.4",
      typescript: "^3.7.5",
      "vue-template-compiler": "^2.6.11",
      "webpack-cli": "^3.3.11"
    },
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint",
      "build:serve": "http-server ./dist -a 127.0.0.1 -p 5050",
      "template:deploy":
        "cd .template && git init && git add -A && git commit -m 'deploy' && git push -f https://github.com/egova-safety/vue-preset-web-template.git master:master",
      dll: "vue-cli-service dll"
    }
  })

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith("src/") || path.startsWith("public/"))
      .forEach(path => delete files[path])
  })

  api.render("./template")

  // 屏蔽 generator 之后的文件写入操作
  // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
