import { Quack } from "./Quack";

describe("Quack", () => {
  let quack: Quack;
  beforeEach(() => {
    quack = new Quack();
  });
  describe("push", () => {
    it("should push the elements into the quack.", () => {
      quack.push(1);
      expect(quack.pop()).toBe(1);
    });
  });
  describe("pop", () => {
    it("should return undefined for empty quack.", () => {
      expect(quack.pop()).toBeUndefined();
      quack.push(1);
      expect(quack.pop()).toBe(1);
      expect(quack.pop()).toBeUndefined();
    });
  });
  describe("pull", () => {
    it("should return undefined for empty quack.", () => {
      expect(quack.pull()).toBeUndefined();
    });
    it("should return the element from the end of the queue.", () => {
      quack.push(1);
      quack.push(2);

      expect(quack.pull()).toBe(1);
      expect(quack.pull()).toBe(2);
      expect(quack.pull()).toBeUndefined();
    });
  });
  describe("pull+pop", () => {
    it("should work", () => {
      quack.push(1);
      quack.push(2);
      quack.push(3);
      quack.push(4);

      expect(quack.pull()).toBe(1);
      expect(quack.pop()).toBe(4);
      expect(quack.pull()).toBe(2);
      expect(quack.pop()).toBe(3);
      expect(quack.pop()).toBeUndefined();
      expect(quack.pull()).toBeUndefined();
    });
  });
  describe("pull+pop+push", () => {
    it("should work", () => {
      quack.push(1);
      quack.push(2);
      quack.push(3);
      quack.push(4);

      expect(quack.pull()).toBe(1);
      expect(quack.pop()).toBe(4);
      quack.push(5);
      expect(quack.pull()).toBe(2);
      expect(quack.pull()).toBe(3);
      expect(quack.pull()).toBe(5);
      expect(quack.pop()).toBeUndefined();
      expect(quack.pull()).toBeUndefined();

      quack.push(10);
      expect(quack.pull()).toBe(10);
      expect(quack.pop()).toBeUndefined();
    });
  });
});
