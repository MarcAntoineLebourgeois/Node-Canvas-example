import { Canvas, Image } from "canvas";
import { getElementSizes } from "./getElementSizes";

export const drawPhoto = (
  canvas: Canvas,
  coordinates: { x: number; y: number },
  photoPlayer: Image,
  pictureFrame: Image,
  pictureFrameWidth: number
) => {
  const {
    pictureFrameHeight,
    croppedPhotoHeight,
    croppedPhotoMarginWidth,
    croppedPhotoWidth,
    photoHeight,
    photoWidth,
    pictureFramePaddingHeight,
    pictureFramePaddingWidth,
  } = getElementSizes(pictureFrameWidth);
  const context = canvas.getContext("2d");

  context.drawImage(
    pictureFrame,
    coordinates.x,
    coordinates.y,
    pictureFrameWidth,
    pictureFrameHeight
  );
  context.drawImage(
    photoPlayer,
    croppedPhotoMarginWidth,
    0,
    croppedPhotoWidth,
    croppedPhotoHeight,
    coordinates.x + pictureFramePaddingWidth,
    coordinates.y + pictureFramePaddingHeight,
    photoWidth,
    photoHeight
  );
};
