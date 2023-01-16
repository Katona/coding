import { AATree } from "./aatree";

describe("aatree", () => {
  describe("insert", () => {
    it("should work", () => {
      let tree = new AATree();
      tree = tree.add(1);
      expect(tree.contains(1)).toBeTruthy();
      expect(tree.contains(2)).toBeFalsy();
      tree = tree.add(2);
      expect(tree.contains(2)).toBeTruthy();
    });
  });

  describe("delete", () => {
    it("should work", () => {
      let tree = new AATree();
      tree = tree.add(1);
      tree = tree.add(2);
      tree = tree.delete(1);
      expect(tree.contains(1)).toBeFalsy();
      expect(tree.contains(2)).toBeTruthy();
      tree = tree.delete(2);
      expect(tree.contains(2)).toBeFalsy();
    });
  });

  describe("asd", () => {
    it("should work", () => {
      let tree = new AATree();
      console.log(tree.add(1).add(2).add(3).add(4).add(5).add(0).toString());
      console.log(tree.add(3).add(2).add(5).add(1).add(4).add(0).toString());
    });
  });
});
