export const getPictureFramePositions = (
  columnWidth: number,
  rowHeight: number,
  pictureFrameWidth: number,
  pictureFrameHeight: number
) => {
  const xPosition = (columnWidth - pictureFrameWidth) / 2;
  const yPosition = (rowHeight - pictureFrameHeight) / 2;

  const C1R1 = { x: xPosition, y: yPosition };
  const C2R1 = { x: columnWidth + xPosition, y: yPosition };
  const C3R1 = { x: 2 * columnWidth + xPosition, y: yPosition };
  const C1R2 = { x: xPosition, y: rowHeight + yPosition };
  const C2R2 = { x: columnWidth + xPosition, y: rowHeight + yPosition };
  const C3R2 = { x: 2 * columnWidth + xPosition, y: rowHeight + yPosition };
  // const C1R3 = { x: xPosition, y: 2 * rowHeight + yPosition };
  const C2R3 = { x: columnWidth + xPosition, y: 2 * rowHeight + yPosition };
  const C3R3 = { x: 2 * columnWidth + xPosition, y: 2 * rowHeight + yPosition };

  const grid2 = [C1R1, C3R1];
  const grid3 = [C1R1, C3R1, C2R2];
  const grid4 = [C2R1, C3R1, C2R2, C3R2];
  const grid5 = [C1R1, C3R1, C1R2, C2R2, C3R2];
  const grid6 = [C2R1, C2R2, C2R3, C3R1, C3R2, C3R3];

  return { grid2, grid3, grid4, grid5, grid6 };
};
