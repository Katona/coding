import { createWeightedRnd, createWeightedRnd2, weightedRandom } from "./Solution";

describe("weightedRandom", () => {
  it("should work", () => {
    weightedRandom([1, 2], [0.5, 0.5]);
    weightedRandom([1, 2, 3], [0.3, 0.3, 0.3]);
    expect(weightedRandom([1, 2, 3, 4], [0.25, 0.25, 0.25, 0.25])).toBe(2);
  });
});

describe("createWeightedRnd", () => {
  it("should work", () => {
    const weightedRnd = createWeightedRnd([1, 2, 3, 4, 5, 7], [0.1, 0.1, 0.3, 0.3, 0.1, 0.1]);
    const histogram: Record<number, number> = {};
    for (let i = 0; i < 10000; i++) {
      const rndNum = weightedRnd();
      histogram[rndNum] = (histogram[rndNum] ?? 0) + 1;
    }
    console.log(histogram);
  });
});

describe("createWeightedRnd2", () => {
  it("should work simple", () => {
    console.log(createWeightedRnd2([1, 2], [0.5, 0.5])());
  });
  it("should work", () => {
    const weightedRnd = createWeightedRnd2([1, 2, 3, 4, 5, 7], [0.1, 0.1, 0.3, 0.3, 0.1, 0.1]);
    const histogram: Record<number, number> = {};
    for (let i = 0; i < 10000; i++) {
      const rndNum = weightedRnd();
      histogram[rndNum] = (histogram[rndNum] ?? 0) + 1;
    }
    console.log(histogram);
  });
});
