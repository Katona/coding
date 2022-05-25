import { maxSlidingWindow } from "./Solution";

describe("Solution", () => {
    it("should work", () => {
        expect(maxSlidingWindow([1, 2, 3], 1)).toStrictEqual([1, 2, 3]);
        expect(maxSlidingWindow([1, 2, 3], 2)).toStrictEqual([2, 3]);
        expect(maxSlidingWindow([1, 2, 1], 2)).toStrictEqual([2, 2]);
        expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
        expect(maxSlidingWindow([2, 1], 1)).toStrictEqual([2, 1]);
        expect(maxSlidingWindow([1, -1], 1)).toStrictEqual([1, -1]);
        expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toStrictEqual([3,3,5,5,6,7]);
    });
})