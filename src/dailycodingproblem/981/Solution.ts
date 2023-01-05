type Sequence = {
  readonly value: number;
  readonly prev?: Sequence;
};
/**
 * See https://qr.ae/prygXT. 
 */
export const lis = (array: number[]): number[] => {
  let sequences: Sequence[] = Array<Sequence>(array.length + 2).fill({ value: Number.MAX_VALUE });
  sequences[0] = { value: Number.MIN_VALUE };
  for (const a of array) {
    // TODO: replace with binary search
    for (let i = 0; i < sequences.length - 1; i++) {
      if (a > sequences[i].value && a < sequences[i + 1].value) {
        sequences[i + 1] = { value: a, prev: sequences[i] };
        break;
      }
    }
  }

  let result: number[] = [];
  let longestSequence: Sequence | undefined;
  for (let i = 1; i < sequences.length; i++) {
    if (sequences[i + 1].value === Number.MAX_VALUE) {
      longestSequence = sequences[i];
      break;
    }
  }
  while (longestSequence && longestSequence.value !== Number.MIN_VALUE) {
    result = [longestSequence.value, ...result];
    longestSequence = longestSequence.prev;
  }
  return result;
};
