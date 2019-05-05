const fs = require("fs-extra");
const path = require("path");
const prettier = require("prettier");

const rimraf = (dir_path) => {
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function (entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
};

const replaceAll = (find, replace, str) => {
    var find = find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return str.replace(new RegExp(find, 'g'), replace);
}

const readFiles = (p, fileCallback, errCallback) => {
    fs.readdir(p, (err, files) => {
        if (err) {
            errCallback(err)
            return
        }

        files.forEach(file => {
            const fullPath = path.join(p, file)

            if (fs.statSync(fullPath).isDirectory()) {
                readFiles(fullPath, fileCallback)
            } else {
                fileCallback(fullPath)
            }
        })
    })
}

const copyFile = (sourceFile, targetFile, transform) => {
    let str = fs.readFileSync(sourceFile).toString();
    if (transform) {
        str = transform(str);
    }
    if (!fs.existsSync(targetFile)) {
        fs.ensureFileSync(targetFile);
    }

    fs.writeFileSync(targetFile, str);
}

const copyDir = (sourceDir, targetDir, nameTransform) => {
    if (nameTransform) {
        readFiles(sourceDir, f => {
            let newFile = f.replace(path.join(sourceDir), path.join(targetDir));
            if (nameTransform)
                newFile = nameTransform(newFile);
            copyFile(f, newFile);
        }, err => console.error(err));
    } else {
        fs.copySync(sourceDir, targetDir);
    }
}


const formatJS = (js) => {
    return prettier.format(js, {
        semi: false,
        parser: "babel"
    });
}



module.exports = {
    rimraf,
    replaceAll,
    readFiles,
    copyFile,
    copyDir,
    formatJS
};
