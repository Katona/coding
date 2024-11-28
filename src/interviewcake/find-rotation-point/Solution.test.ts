import findRotationPoint from "./Solution";

describe("findRotationPoint", () => {
  it("should find the rotation point", () => {
    expect(findRotationPoint(["alma"])).toBe(0);
    expect(findRotationPoint(["alma", "korte"])).toBe(0);
    expect(findRotationPoint(["szilva", "alma", "korte"])).toBe(1);
    expect(findRotationPoint(["szilva", "alma", "korte", "meggy"])).toBe(1);
    expect(findRotationPoint(["meggy", "szilva", "alma", "korte"])).toBe(2);
    expect(findRotationPoint(["korte", "meggy", "szilva", "alma"])).toBe(3);
    expect(findRotationPoint(["alma", "korte", "meggy", "szilva"])).toBe(0);
  });
});
