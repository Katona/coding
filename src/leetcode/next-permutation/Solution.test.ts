import { nextPermutation } from "./Solution";

describe("nextPermutation", () => {
  it("should work", () => {
    let input = [1, 2];
    nextPermutation(input);
    expect(input).toEqual([2, 1]);

    input = [2, 1];
    nextPermutation(input);
    expect(input).toEqual([1, 2]);

    input = [2, 3, 1];
    nextPermutation(input);
    expect(input).toEqual([3, 1, 2]);

    input = [2, 3, 2, 1];
    nextPermutation(input);
    expect(input).toEqual([3, 1, 2, 2]);
  });
});
