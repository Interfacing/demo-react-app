import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter, formatId } from "./stringUtils";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
    expect(capitalizeFirstLetter("javaScript")).toBe("JavaScript");
  });

  it("should return an empty string if input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });
});

describe("formatId", () => {
  it("should format a number as a three-digit ID string", () => {
    expect(formatId(1)).toBe("#001");
    expect(formatId(23)).toBe("#023");
    expect(formatId(456)).toBe("#456");
  });

  it("should handle edge cases properly", () => {
    expect(formatId(0)).toBe("#000");
    expect(formatId(999)).toBe("#999");
  });
});
