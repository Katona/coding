import { isIdealPermutation, mergeSort } from "./Solution"

describe('mergeSort', () => {
    it('works properly.', () => {
        expect(mergeSort([1])).toEqual([1])
        // console.log(mergeSort([2, 1]))
        expect(mergeSort([2, 1])).toEqual([1, 2])
        expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3])
        expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
        expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
        console.log(mergeSort([3, 4, 1, 2]).invCnt);
    })
})

describe('isIdealPermutation', () => {
    it('works properly.', () => {
        expect(isIdealPermutation([1])).toBe(true);
        expect(isIdealPermutation([2, 1])).toBe(true)
        expect(isIdealPermutation([2, 1, 3])).toEqual(true)
        expect(isIdealPermutation([3, 1, 2])).toEqual(false)

    })
})