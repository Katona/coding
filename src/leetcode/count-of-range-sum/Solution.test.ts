import { countRangeSum } from "./Solution"

describe("countRangeSum", () => {
    it("should work.", () => {
        expect(countRangeSum([-2, 5, -1], -2, 2)).toBe(3);
        expect(countRangeSum([0], 0, 0)).toBe(1);
    })
})