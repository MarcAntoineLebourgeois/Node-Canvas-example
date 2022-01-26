export const getElementSizes = (pictureFrameWidth: number) => {
  const width = 1920;
  const height = 1080;
  const language = "fr";
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

  return {
    width,
    height,
    language,
    pictureFrameHeight,
    pictureFramePaddingWidth,
    pictureFramePaddingHeight,
    photoWidth,
    photoHeight,
    croppedPhotoWidth,
    croppedPhotoHeight,
    croppedPhotoMarginWidth,
    dhvgLogoWidth,
    dhvgLogoHeight,
  };
};
