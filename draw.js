const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

const width = 1200;
const height = 620;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "yellow";
context.fillRect(0, 0, width, height);

context.fillStyle = "#000";
context.font = "72px Arial";
context.textAlign = "center";
context.fillText("Hello, World!", 400, 120);

context.fillStyle = "#fff";
context.fillRect(400, 200, 300, 200);

loadImage("./NodeJS.png").then((image) => {
  context.drawImage(image, 425, 225);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
});
