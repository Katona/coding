import { maximalRectangle } from "./Solution";

describe("maximalRectangle", () => {
  it("should work", () => {
      expect(maximalRectangle([["1"]])).toBe(1);
      expect(maximalRectangle([["0"]])).toBe(0);
      expect(maximalRectangle([["0", "1"], ["0", "1"]])).toBe(2);
      expect(maximalRectangle([["1", "1"], ["1", "1"]])).toBe(4);
      expect(maximalRectangle([["0", "1"], ["1", "1"]])).toBe(2);
      expect(maximalRectangle([["0", "0", "1"], ["0", "0", "1"], ["1", "1", "1"]])).toBe(3);
      expect(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])).toBe(6);
  });
});
