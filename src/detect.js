const faceapi = require("face-api.js");
const canvas = require("canvas");

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const net = faceapi.nets.ssdMobilenetv1;
const minConfidence = 0.5;
const opts = new faceapi.SsdMobilenetv1Options({ minConfidence });

async function detect(file) {
    await net.loadFromDisk("./weights");
    const img = await canvas.loadImage(file);
    return await faceapi.detectAllFaces(img, opts).length;
}

module.exports = detect;