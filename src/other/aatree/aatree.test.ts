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

    it("should keep the tree balanced.", () => {
        let tree = new AATree().add(1).add(2).add(3).add(4).add(5).add(6);
        console.log(tree.toString());
    })
  });

  describe("delete", () => {
    it("should work", () => {
      let tree = new AATree();
      tree = tree.add(1).add(2).delete(1);
      expect(tree.contains(1)).toBeFalsy();
      expect(tree.contains(2)).toBeTruthy();
      tree = tree.delete(2);
      expect(tree.contains(2)).toBeFalsy();
    });

    it("should do nothing when non-existing element is deleted", () => {
      let tree = new AATree();
      tree = tree.add(1);
      tree = tree.delete(2);
      expect(tree.contains(1)).toBeTruthy();
    })

    it("should work when successor is not direct right child", () => {
      let tree = new AATree();
      tree = tree.add(5).add(3).add(1).add(4).add(9).add(7).add(6).add(8).add(10).add(6.5);
      tree = tree.delete(5);
      expect(tree.contains(5)).toBeFalsy();
      expect(tree.contains(1)).toBeTruthy();
      expect(tree.contains(3)).toBeTruthy();
      expect(tree.contains(4)).toBeTruthy();
      expect(tree.contains(6)).toBeTruthy();
      expect(tree.contains(6.5)).toBeTruthy();
      expect(tree.contains(7)).toBeTruthy();
      expect(tree.contains(8)).toBeTruthy();
      expect(tree.contains(9)).toBeTruthy();
    })

    it("should maintain the balance of the tree",  () => {
      let tree = new AATree().add(5).add(3).add(1).add(4).add(9).add(7).add(6).add(8).add(10).add(6.5);
      console.log(tree.toString());
      tree = tree.delete(1).delete(4).delete(3);
      console.log(tree.toString());
    })
  });

  describe("asd", () => {
    it("should work", () => {
      let tree = new AATree();
      console.log(tree.add(1).add(2).add(3).add(4).add(5).add(0).toString());
      console.log(tree.add(3).add(2).add(5).add(1).add(4).add(0).toString());
    });
  });
});
