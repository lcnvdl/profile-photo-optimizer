const Settings = require("./settings");

function processArguments(process) {
    const args = process.argv.splice(2);

    let settings = new Settings();

    for (let i = 0; i < args.length; i++) {
        let a = args[i];

        if (i === 0) {
            settings.file = a;
        }
        else if (a === "--face-required") {
            settings.faceRequeriment = true;
        }
        else if (a === "--one-face") {
            settings.faceRequeriment = true;
            settings.facesLimit = 1;
        }
        else if (a === "--max-width") {
            settings.widthLimit = +args[++i];
        }
        else if (a === "--max-height") {
            settings.heightLimit = +args[++i];
        }
        else if (a === "--max-size") {
            let s = args[++i].split("x");
            settings.widthLimit = +s[0];
            settings.heightLimit = +s[1];
        }
        else if (a === "--faces") {
            settings.faceRequeriment = true;
            settings.facesLimit = +args[++i];
        }
        else if (a === "--output" || a === "-o") {
            settings.output = args[++i];
        }
        else if (i === 1 && a.indexOf("--") === -1) {
            settings.output = a;
        }
        else {
            throw new Error(`Invalid argument: ${a}`);
        }
    }

    return settings;
}

module.exports = processArguments;
