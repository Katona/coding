const MUL_REGEX = /mul\((\d+),(\d+)\)/g;

const multiply = (input: string) => {
  const matches = Array.from(input.matchAll(MUL_REGEX));
  return matches.reduce(
    (product, [, a, b, ...rest]) => product + Number.parseInt(a ?? "0") * Number.parseInt(b ?? "0"),
    0,
  );
};

const MUL_REGEX_2 = /(?:mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g;

const multiply2 = (input: string) => {
  const matches = Array.from(input.matchAll(MUL_REGEX_2));
  return matches.reduce(
    (acc, [matchString, op1, op2, ...rest]) => {
      // console.log({ matchString, op1, op2 });
      if (matchString?.startsWith("don't")) return { ...acc, enabled: false };
      if (matchString?.startsWith("do")) return { ...acc, enabled: true };
      return !acc.enabled
        ? acc
        : {
            ...acc,
            product: acc.product + Number.parseInt(op1 ?? "0") * Number.parseInt(op2 ?? "0"),
          };
    },
    { product: 0, enabled: true },
  ).product;
};

export { multiply, multiply2 };
