import { constructBST } from "./Solution";

describe("constructBST", () => {
  it("should work", () => {
    let tree = constructBST([1]);
    expect(tree).toEqual({ value: 1 });

    tree = constructBST([1, 2]);
    expect(tree).toEqual({value: 2, left: {value: 1}});

    tree = constructBST([2, 1]);
    expect(tree).toEqual({ value: 1, right: {value:2}});

    tree = constructBST([2, 4, 3, 8, 7, 5]);
    expect(tree?.value).toBe(5);
    expect(tree?.left).toEqual({ value: 3, left: { value: 2 }, right: { value: 4 } });
    expect(tree?.right).toEqual({ value: 7, right: { value: 8 } });
  });
});
