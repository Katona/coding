type Button = {
  dx: number;
  dy: number;
};

type Prize = {
  x: number;
  y: number;
};

type ClawMachine = {
  buttonA: Button;
  buttonB: Button;
  prize: Prize;
};

const getSmallestTokenForMachine = (
  clawMachine: ClawMachine,
  cache = new Map<string, number>(),
  buttonPressCount = 0,
): number => {
  const { prize, buttonA, buttonB } = clawMachine;
  if (prize.x < 0 || prize.y < 0) return Number.MAX_VALUE;
  if (prize.x === 0 && prize.y === 0) return 0;
  const cacheKey = `x=${prize.x},y=${prize.y}`;
  const cachedValue = cache.get(cacheKey);
  if (cachedValue) return cachedValue;

  const buttonATokens =
    getSmallestTokenForMachine(
      {
        ...clawMachine,
        prize: { x: prize.x - buttonA.dx, y: prize.y - buttonA.dy },
      },
      cache,
      buttonPressCount + 1,
    ) + 3;
  const buttonBTokens =
    getSmallestTokenForMachine(
      {
        ...clawMachine,
        prize: { x: prize.x - buttonB.dx, y: prize.y - buttonB.dy },
      },
      cache,
      buttonPressCount + 1,
    ) + 1;

  const result = Math.min(buttonATokens, buttonBTokens);
  if (result) cache.set(cacheKey, result);
  return result;
};

const getSmallestTokenForMachine2 = ({ buttonA, buttonB, prize }: ClawMachine): number => {
  const buttonAClick = Math.round(
    ((prize.x * buttonB.dy) / buttonB.dx - prize.y) /
      ((buttonA.dx * buttonB.dy) / buttonB.dx - buttonA.dy),
  );
  const buttonBClick = Math.round((prize.x - buttonAClick * buttonA.dx) / buttonB.dx);
  if (buttonAClick * buttonA.dx + buttonBClick * buttonB.dx !== prize.x) return Number.MAX_VALUE;
  if (buttonAClick * buttonA.dy + buttonBClick * buttonB.dy !== prize.y) return Number.MAX_VALUE;

  const tokenCount = buttonAClick * 3 + buttonBClick;
  return tokenCount;
};

const getSmallestToken = (
  machines: ClawMachine[],
  getTokenFunction: (m: ClawMachine) => number = getSmallestTokenForMachine,
) => {
  const tokensForMachines = machines
    .map((m) => getTokenFunction(m))
    .filter((tokenCount) => tokenCount !== Number.MAX_VALUE);
  return tokensForMachines.reduce((acc, curr) => acc + curr);
};

export { getSmallestTokenForMachine, getSmallestToken, getSmallestTokenForMachine2 };
export type { Button, Prize, ClawMachine };
