import { addTwoNumbers, addTwoNumbersRecursive } from "./Solution";

describe("addTwoNumbers", () => {
  it("should work", () => {
    expect(addTwoNumbers(null, null)).toBeNull();
    expect(addTwoNumbers({ val: 1, next: null }, null)).toStrictEqual({ val: 1, next: null });
    expect(addTwoNumbers(null, { val: 1, next: null })).toStrictEqual({ val: 1, next: null });
    expect(addTwoNumbers({ val: 1, next: null }, { val: 1, next: null })).toStrictEqual({
      val: 2,
      next: null,
    });
    expect(addTwoNumbers({ val: 1, next: null }, { val: 9, next: null })).toStrictEqual({
      val: 0,
      next: { val: 1, next: null },
    });
  });
});

describe("addTwoNumbersRecursive", () => {
  it("should work", () => {
    expect(addTwoNumbersRecursive(null, null)).toBeNull();
    expect(addTwoNumbersRecursive({ val: 1, next: null }, null)).toStrictEqual({ val: 1, next: null });
    expect(addTwoNumbersRecursive(null, { val: 1, next: null })).toStrictEqual({ val: 1, next: null });
    expect(addTwoNumbersRecursive({ val: 1, next: null }, { val: 1, next: null })).toStrictEqual({
      val: 2,
      next: null,
    });
    expect(addTwoNumbersRecursive({ val: 1, next: null }, { val: 9, next: null })).toStrictEqual({
      val: 0,
      next: { val: 1, next: null },
    });
  });
});
