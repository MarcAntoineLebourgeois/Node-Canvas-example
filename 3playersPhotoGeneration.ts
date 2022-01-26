import fs from "fs";
import { buildBaseCanvas } from "./buildBaseCanvas";
import { drawPhoto } from "./drawPhoto";
import { getElementSizes } from "./getElementSizes";
import { getPictureFramePositions } from "./getPictureFramePositions";

const generateCoreTeamPhoto = async () => {
  const pictureFrameWidth = 480;
  const {
    width,
    height,
    dhvgLogoHeight,
    dhvgLogoWidth,
    pictureFrameHeight,
    language,
  } = getElementSizes(pictureFrameWidth);

  const columnWidth = width / 3;
  const rowHeight = height / 2;

  const { canvas, context, dhvgLogo, photoPlayer, pictureFrame } =
    await buildBaseCanvas(width, height, language);

  context.drawImage(
    dhvgLogo,
    columnWidth + (columnWidth - dhvgLogoWidth) / 2,
    rowHeight - dhvgLogoHeight,
    dhvgLogoWidth,
    dhvgLogoHeight
  );

  const { grid3 } = getPictureFramePositions(
    columnWidth,
    rowHeight,
    pictureFrameWidth,
    pictureFrameHeight
  );
  grid3.map((item) =>
    drawPhoto(canvas, item, photoPlayer, pictureFrame, pictureFrameWidth)
  );

  // change quality and use jpeg if better performance
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
};

generateCoreTeamPhoto();
