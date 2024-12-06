import { multiply, multiply2 } from "./Solution";
import { readFileSync } from "fs";

describe("multiply", () => {
  it("should work", () => {
    expect(multiply("mul(6,4)mul(3,4)")).toBe(36);
    expect(multiply("mul(6,4)mul(2mul(3,4)")).toBe(36);
    expect(multiply("mul(6,4)mul(2mul(3,4)")).toBe(36);
    expect(
      multiply("xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"),
    ).toBe(161);
    console.log(process.cwd());
    const input = readFileSync("src/advent-of-code/2024/day-3/input.json")?.toString();
    expect(multiply(input)).toBe(189600467);
  });
});

describe("multiply2", () => {
  it("should work", () => {
    expect(multiply2("mul(6,4)mul(3,4)")).toBe(36);
    expect(multiply2("mul(6,4)mul(2mul(3,4)")).toBe(36);
    expect(multiply2("mul(6,4)mul(2mul(3,4)")).toBe(36);
    expect(
      multiply2("xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"),
    ).toBe(161);
    console.log(process.cwd());
    const input = readFileSync("src/advent-of-code/2024/day-3/input.json")?.toString();
    expect(multiply2(input)).toBe(107069718);
  });
});
