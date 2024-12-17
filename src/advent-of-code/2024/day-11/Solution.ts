type Stone = {
  value: number;
  prev?: Stone;
  next?: Stone;
};

type Rule = {
  isApplicable: (curr: number) => boolean;
  apply: (curr: number) => number[];
};

const zeroToOne: Rule = {
  isApplicable: (curr: number) => curr === 0,

  apply: (value: number) => {
    if (zeroToOne.isApplicable(value)) {
      return [1];
    }
    return [value];
  },
};

const splitEven: Rule = {
  isApplicable: (value: number) => value.toString().length % 2 === 0,

  apply: (value: number) => {
    const valueStr = value.toString();
    if (splitEven.isApplicable(value)) {
      const middle = Math.floor(valueStr.length / 2);
      const left = Number.parseInt(valueStr.slice(0, middle));
      const right = Number.parseInt(valueStr.slice(middle));
      return [left, right];
    }

    return [value];
  },
};

const multiplyWith2024: Rule = {
  isApplicable: () => true,
  apply: (value: number) => {
    return [value * 2024];
  },
};

const RULES = [zeroToOne, splitEven, multiplyWith2024];

const blink = (input: number[], blinkCount: number) => {
  let freqs = input.reduce<Map<number, number>>((acc, curr) => {
    acc.set(curr, (acc.get(curr) ?? 0) + 1);
    return acc;
  }, new Map<number, number>());

  for (let i = 0; i < blinkCount; i++) {
    const nextFreqs = new Map(freqs.entries());
    Array.from(freqs.keys()).forEach((currStone) => {
      const rule = RULES.find((rule) => rule.isApplicable(currStone));
      const newStones = rule?.apply(currStone);
      const currFreq = freqs.get(currStone) ?? 0;
      newStones?.forEach((newStone) =>
        nextFreqs.set(newStone, (nextFreqs.get(newStone) ?? 0) + currFreq),
      );
      nextFreqs.set(currStone, (nextFreqs.get(currStone) ?? 0) - currFreq);
    });
    freqs = nextFreqs;
  }
  return Array.from(freqs.values()).reduce((acc, curr) => acc + curr);
};

export { blink };
