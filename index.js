const detect = require("./src/detect");
const sharp = require("sharp");

const file = "./input.png";
const faceRequeriment = false;
const facesLimit = 0;
const widthLimit = 1200;
const heightLimit = 1200;

async function limit(file) {
    const image = sharp(file);
    const metadata = await image.metadata();

    if (metadata.width > widthLimit ||
        metadata.height > heightLimit) {

        await image.resize(widthLimit, heightLimit, {
            fit: "outside"
        }).toFile(file);
    }
}

async function process() {
    await limit(file);

    if (faceRequeriment) {
        let faces = await detect(file);
        if (facesLimit > 0 && faces !== facesLimit) {
            throw new Error(`Se han detectado ${faces} rostros en la imagen, pero solo se permiten ${facesLimit}.`);
        }
        else if (faces === 0) {
            throw new Error("No se han detectado rostros en la imagen.");
        }
    }
}

process().then(() => {
    console.log("Success");
    process.exit(0);
}, err => {
    console.error(err);
    process.exit(1);
});