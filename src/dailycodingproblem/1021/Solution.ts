const RIGHT_BITS_MASK = 0b01010101;
const LEFT_BITS_MASK = 0b10101010;

const swapBits = (n: number) => {
  return ((n >> 1) & RIGHT_BITS_MASK) | ((n << 1) & LEFT_BITS_MASK);
};

export default swapBits;
