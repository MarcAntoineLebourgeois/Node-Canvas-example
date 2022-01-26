import fs from "fs";
import { buildBaseCanvas } from "./buildBaseCanvas";
import { drawPhoto } from "./drawPhoto";
import { getElementSizes } from "./getElementSizes";
import { getPictureFramePositions } from "./getPictureFramePositions";

const generateCoreTeamPhoto = async () => {
  const pictureFrameWidth = 420;
  const {
    width,
    height,
    dhvgLogoHeight,
    dhvgLogoWidth,
    pictureFrameHeight,
    language,
  } = getElementSizes(pictureFrameWidth);

  const columnWidth = width / 3;
  const rowHeight = height / 3;

  const { canvas, context, dhvgLogo, photoPlayer, pictureFrame } =
    await buildBaseCanvas(width, height, language);

  context.drawImage(
    dhvgLogo,
    (columnWidth - dhvgLogoWidth) / 2,
    (height - dhvgLogoHeight) / 2,
    dhvgLogoWidth,
    dhvgLogoHeight
  );

  const { grid6 } = getPictureFramePositions(
    columnWidth,
    rowHeight,
    pictureFrameWidth,
    pictureFrameHeight
  );
  grid6.map((item) =>
    drawPhoto(canvas, item, photoPlayer, pictureFrame, pictureFrameWidth)
  );

  // change quality and use jpeg if better performance
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
};

generateCoreTeamPhoto();
