import { possibleBipartition } from "./possible-bi-partition";

describe("possibleBiPartition", () => {
  it("should work", () => {
    expect(possibleBipartition(3, [])).toBe(true);
    expect(possibleBipartition(2, [[1, 2]])).toBe(true);
    expect(possibleBipartition(3, [[1, 2], [2, 3], [3, 1]])).toBe(false);
    expect(possibleBipartition(3, [[1, 2], [3, 1]])).toBe(true);
    expect(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])).toBe(true);
    expect(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]])).toBe(false);
  });
});
