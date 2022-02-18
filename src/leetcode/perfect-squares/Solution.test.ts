import { numSquares } from "./Solution"

describe("numSquares", () => {
    it("should work", () => {
        expect(numSquares(1)).toBe(1);
        expect(numSquares(2)).toBe(2);
        expect(numSquares(4)).toBe(1);
        expect(numSquares(5)).toBe(2);
        expect(numSquares(27)).toBe(3);
        expect(numSquares(1000)).toBe(2);
    })
})