import { getMaxProfit } from "./Solution"

describe("getMaxProfit", () => {
    it("should work", () => {
        expect(getMaxProfit([5, 2, 4, 0, 1], 2)).toBe(3);
        expect(getMaxProfit([5, 2, 4, 0, 1], 1)).toBe(2);
        expect(getMaxProfit([5, 2, 4, 0, 3, 1, 4], 1)).toBe(4);
        expect(getMaxProfit([5, 2, 4, 0, 3, 1, 4], 2)).toBe(6);
        expect(getMaxProfit([5, 2, 4, 0, 3, 1, 4], 3)).toBe(8);
        expect(getMaxProfit([5, 2, 4, 0, 3, 1, 4], 4)).toBe(8);
    })
}) 