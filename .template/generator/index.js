module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0",
      "flagwind-core": "^1.1.0",
      "@egova/flagwind-echarts": "^1.0.1",
      "@egova/flagwind-web": "^1.0.14",
      iview: "^3.2.2",
      echarts: "^4.1.0",
      "js-cookie": "^2.2.0",
      vue: "^2.5.22",
      "vue-class-component": "^6.0.0",
      "vue-property-decorator": "^7.0.0",
      "vue-router": "^3.0.2",
      vuex: "^3.1.0"
    },
    devDependencies: {
      "@egova/vue-cli-plugin-dll": "^1.1.7",
      "@types/js-cookie": "^2.2.1",
      "@types/node": "^11.9.4",
      "@vue/cli-plugin-babel": "^3.4.0",
      "@vue/cli-plugin-typescript": "^3.4.0",
      "@vue/cli-service": "^3.4.0",
      "add-asset-html-webpack-plugin": "^3.1.3",
      "compression-webpack-plugin": "^2.0.0",
      "friendly-errors-webpack-plugin": "^1.7.0",
      "raw-loader": "^1.0.0",
      sass: "^1.17.0",
      "sass-loader": "^7.1.0",
      "style-resources-loader": "^1.2.1",
      "tslint-config-flagwind": "^1.0.1",
      "tslint-loader": "^3.5.4",
      typescript: "^3.3.3",
      "vue-template-compiler": "^2.5.21",
      "webpack-cli": "^3.2.3"
    },
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint",
      "build:serve": "http-server ./dist -a 127.0.0.1 -p 5050",
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
