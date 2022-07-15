export const xOrY = (x: number, y: number, b: 0 | 1) => {
  return b * x + (1 - b) * y;
};

export const xOrYBitwise = (x: number, y: number, b: 0 | 1) => {
  const mask = -b;
  return (x & mask) | (y & ~mask);
};
