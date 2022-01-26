import { createCanvas, loadImage } from "canvas";
import fs from "fs";

const width = 1920;
const height = 1080;
const language = "fr";
const backgroundUrl =
  "https://dhvg-cicd-ui-dhvg-staging-content-player-media.s3.eu-west-1.amazonaws.com/DiamondHeist/levels/teamPhoto/background.svg";
const happyTeamsLogoUrl =
  "https://dhvg-cicd-ui-dhvg-staging-content-player-media.s3.eu-west-1.amazonaws.com/DiamondHeist/common/happyTeamsLogo.png";
const dhvgLogoFrUrl =
  "https://dhvg-cicd-ui-dhvg-staging-content-player-media.s3.eu-west-1.amazonaws.com/DiamondHeist/common/dhvg.fr.png";
const dhvgLogoenUrl =
  "https://dhvg-cicd-ui-dhvg-staging-content-player-media.s3.eu-west-1.amazonaws.com/DiamondHeist/common/dhvg.en.svg";
const pictureFrameUrl =
  "https://dhvg-cicd-ui-dhvg-staging-content-player-media.s3.eu-west-1.amazonaws.com/DiamondHeist/levels/teamPhoto/PictureFrame.svg";
const photoPlayerUrl =
  "https://dhvg-api-dev-malebourgeois-content-pictures.s3.eu-west-1.amazonaws.com/3864e458-0282-42fc-b71b-9b9892dd3f6a/92232ca5-f8b1-40e1-8e1c-2fb7fabbb50d/5460fb80-b41c-4f8a-83c0-0613c3bdc7c6";
const pictureFrameWidth = 420;
const pictureFrameHeight = pictureFrameWidth / 1.315;
const pictureFramePaddingWidth = pictureFrameWidth / 20.869;
const pictureFramePaddingHeight = pictureFrameWidth / 26.666;
const photoWidth = pictureFrameWidth - 2 * pictureFramePaddingWidth;
const photoHeight = pictureFrameHeight - 2 * pictureFramePaddingHeight;
const croppedPhotoWidth = pictureFrameWidth / 1.062;
const croppedPhotoHeight = pictureFrameWidth / 1.399;
const croppedPhotoMarginWidth = pictureFrameWidth / 6.358;
const dhvgLogoWidth = 560;
const dhvgLogoHeight = 454;

const columnWidth = width / 3;
const rowHeight = height / 3;

const generateCoreTeamPhoto = async (language: string) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  const background = await loadImage(backgroundUrl);
  const happyTeamsLogo = await loadImage(happyTeamsLogoUrl);
  const dhvgLogoUrl = language === "fr" ? dhvgLogoFrUrl : dhvgLogoenUrl;
  const dhvgLogo = await loadImage(dhvgLogoUrl);
  const pictureFrame = await loadImage(pictureFrameUrl);
  const photoPlayer = await loadImage(photoPlayerUrl);
  context.drawImage(background, 0, 0, width, height);
  context.drawImage(happyTeamsLogo, 0, (height * 4) / 5, 216, 216);

  // 6 players layout
  context.drawImage(
    dhvgLogo,
    (columnWidth - dhvgLogoWidth) / 2,
    (height - dhvgLogoHeight) / 2,
    dhvgLogoWidth,
    dhvgLogoHeight
  );
  // Photo #1
  context.drawImage(
    pictureFrame,
    columnWidth + (columnWidth - pictureFrameWidth) / 2,
    (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    (rowHeight - pictureFrameHeight) / 2 + pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // Photo #2
  context.drawImage(
    pictureFrame,
    2 * columnWidth + (columnWidth - pictureFrameWidth) / 2,
    (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    2 * columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    (rowHeight - pictureFrameHeight) / 2 + pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // Photo #3
  context.drawImage(
    pictureFrame,
    columnWidth + (columnWidth - pictureFrameWidth) / 2,
    rowHeight + (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    rowHeight +
      (rowHeight - pictureFrameHeight) / 2 +
      pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // Photo #4
  context.drawImage(
    pictureFrame,
    2 * columnWidth + (columnWidth - pictureFrameWidth) / 2,
    rowHeight + (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    2 * columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    rowHeight +
      (rowHeight - pictureFrameHeight) / 2 +
      pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // Photo #5
  context.drawImage(
    pictureFrame,
    columnWidth + (columnWidth - pictureFrameWidth) / 2,
    2 * rowHeight + (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    2 * rowHeight +
      (rowHeight - pictureFrameHeight) / 2 +
      pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // Photo #6
  context.drawImage(
    pictureFrame,
    2 * columnWidth + (columnWidth - pictureFrameWidth) / 2,
    2 * rowHeight + (rowHeight - pictureFrameHeight) / 2,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    2 * columnWidth +
      (columnWidth - pictureFrameWidth) / 2 +
      pictureFramePaddingWidth,
    2 * rowHeight +
      (rowHeight - pictureFrameHeight) / 2 +
      pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
  // change quality and use jpeg if better performance
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
};

generateCoreTeamPhoto(language);
