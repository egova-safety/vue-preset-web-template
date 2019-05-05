module.exports = (api, opts) => {

    api.extendPackage({
        dependencies: "#{dependencies}",
        devDependencies: "#{devDependencies}",
        scripts: "#{scripts}"
    });

    // 删除 vue-cli3 默认目录
    api.render(files => {
        Object.keys(files)
            .filter(path => path.startsWith('src/') || path.startsWith('public/'))
            .forEach(path => delete files[path])
    });

    api.render('./template');

    // 屏蔽 generator 之后的文件写入操作
    // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
    api.onCreateComplete(() => {
        process.env.VUE_CLI_SKIP_WRITE = true;
    });
}
