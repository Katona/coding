import { countSmaller } from "./Solution"

describe('Solution', () => {
    it('should work.', () => {
        expect(countSmaller([2, 1])).toEqual([1, 0]);
        expect(countSmaller([1, 1])).toEqual([0, 0]);
        expect(countSmaller([3, 4, 1, 2])).toEqual([2, 2, 0, 0]);
        expect(countSmaller([4, 3, 2, 1])).toEqual([3, 2, 1, 0]);
        expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
        expect(countSmaller([1, 2, 3, 4])).toEqual([0, 0, 0, 0]);

    })
})