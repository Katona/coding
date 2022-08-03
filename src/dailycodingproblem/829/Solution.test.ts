import { ConstantMap } from "./Solution";

describe("ConstantMap", () => {
  it("should work", () => {
    let map = new ConstantMap();
    expect(map.getMax()).toBeUndefined();
    expect(map.getMin()).toBeUndefined();

    map.plus("alma"); // alma = 1
    expect(map.getMin()).toBe("alma");
    expect(map.getMax()).toBe("alma");
    
    map.plus("alma"); // alma = 2
    expect(map.getMin()).toBe("alma");
    expect(map.getMax()).toBe("alma");

    map.plus("korte"); // alma = 2, korte = 1
    expect(map.getMin()).toBe("korte");
    expect(map.getMax()).toBe("alma");
    
    map.plus("korte"); // alma = 2, korte = 2
    map.plus("korte"); // alma = 2, korte = 3
    expect(map.getMax()).toBe("korte");
    expect(map.getMin()).toBe("alma");
  
    map.plus("barack"); // alma = 2, korte = 3, barack = 1
    expect(map.getMax()).toBe("korte");
    expect(map.getMin()).toBe("barack");

    map.minus("barack"); // alma = 2, korte = 3, barack = 0
    expect(map.getMax()).toBe("korte");
    expect(map.getMin()).toBe("alma");

    map.minus("korte"); // alma = 2, korte = 2
    expect(map.getMax()).toBe("korte");
    expect(map.getMin()).toBe("korte");

    map.minus("korte"); // alma = 2, korte = 1
    expect(map.getMax()).toBe("alma");
    expect(map.getMin()).toBe("korte");

    map.minus("korte"); // alma = 2 (korte = 0)
    expect(map.getMax()).toBe("alma");
    expect(map.getMin()).toBe("alma");

    map.minus("korte"); // see if it crashes for non-existent
    expect(map.getMax()).toBe("alma");
    expect(map.getMin()).toBe("alma");

    map.minus("alma"); // alma = 1
    map.minus("alma"); // alma = 0
    expect(map.getMax()).toBeUndefined();
    expect(map.getMin()).toBeUndefined();

    map.plus("alma"); // alma = 1 (check if still works)
    // map.minus("alma"); // alma = 0
    expect(map.getMax()).toBe("alma");
    expect(map.getMin()).toBe("alma");
  });
});
