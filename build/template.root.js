const tools = require("./template.tools");

module.exports = function gengerateRoot(pkg) {
    const pluginName = pkg.name;

    try {
        console.info(`生成${pluginName}插件 根目录文件 开始`)
        tools.copyFile('./build/template/index.js', `./.template/index.js`);
        tools.copyFile('./build/template/preset.json', `./.template/preset.json`);
        tools.copyFile('./build/template/prompts.js', `./.template/prompts.js`);
        tools.copyFile('./build/template/README.md', `./.template/README.md`, (data) => {
            data = tools.replaceAll("#{pluginName}", pluginName, data);
            data = tools.replaceAll("#{pluginSimpleName}", pkg.name, data);
            return data;
        });
        tools.copyFile('./build/template/package.json', `./.template/package.json`, (data) => {
            data = tools.replaceAll("#{pluginName}", pluginName, data);
            data = tools.replaceAll("#{pluginSimpleName}", pkg.name, data);
            data = tools.replaceAll("#{version}", pkg.version, data);
            return data;
        });

        console.info(`生成${pluginName}插件 根目录文件 完成`)
    } catch (err) {
        console.error(err)
    }
}
