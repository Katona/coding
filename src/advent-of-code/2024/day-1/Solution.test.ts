import getInput from "./input";
import { getDistance, getSimilarity } from "./Solution";

describe("getDistance", () => {
  it("should work", () => {
    expect(getDistance([3, 2, 1], [1, 2, 3])).toBe(0);
    expect(getDistance([3, 2, 1], [1, 2, 4])).toBe(1);
    expect(getDistance([3], [1, 2])).toBe(4);
    const input = getInput();
    // console.log({ input });
    expect(getDistance(input.list1, input.list2)).toBe(2166959);
  });
});

describe("getSimilarity", () => {
  it("should work", () => {
    expect(getSimilarity([3, 2, 1], [1, 2, 3])).toBe(6);
    expect(getSimilarity([3, 2, 1], [1, 2, 4])).toBe(3);
    expect(getSimilarity([3], [1, 2])).toBe(0);
    const input = getInput();
    expect(getSimilarity(input.list1, input.list2)).toBe(23741109);
  });
});
