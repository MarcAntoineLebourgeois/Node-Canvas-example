import { createCanvas, loadImage } from "canvas";
import { backgroundUrl, happyTeamsLogoUrl, dhvgLogoFrUrl } from "./assets";
import { dhvgLogoenUrl, pictureFrameUrl, photoPlayerUrl } from "./assets";

export const buildBaseCanvas = async (
  width: number,
  height: number,
  language: string
) => {
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
  return { dhvgLogo, pictureFrame, photoPlayer, context, canvas };
};
