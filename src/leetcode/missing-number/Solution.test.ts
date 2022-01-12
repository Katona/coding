import { missingNumber } from "./Solution";

describe("missingNumber", () => {
  it("should work.", () => {
      expect(missingNumber([0, 1])).toBe(2);
      expect(missingNumber([0, 2])).toBe(1);
      expect(missingNumber([1, 2])).toBe(0);
      expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
  });
});
