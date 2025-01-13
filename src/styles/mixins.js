export const color = (color, opacity = 1) =>
  opacity === 1 ? `${color}` : `rgb(from ${color} r g b / ${opacity})`;

export const rem = (px) => {
  const remSize = px / 16;

  return Math.abs(px) === 1 ? `${px}px` : `${remSize}rem`;
};
