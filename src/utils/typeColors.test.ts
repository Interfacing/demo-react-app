import { describe, it, expect } from "vitest";
import { getTypeColor } from "./typeColors";

describe("getTypeColor", () => {
  const typeColorPairs: [string, string][] = [
    ["grass", "#78C850"],
    ["fire", "#F08030"],
    ["water", "#6890F0"],
    ["bug", "#A8B820"],
    ["normal", "#A8A878"],
    ["poison", "#A040A0"],
    ["electric", "#F8D030"],
    ["ground", "#E0C068"],
    ["fairy", "#EE99AC"],
    ["fighting", "#C03028"],
    ["psychic", "#F85888"],
    ["rock", "#B8A038"],
    ["ghost", "#705898"],
    ["ice", "#98D8D8"],
    ["dragon", "#7038F8"],
    ["dark", "#705848"],
    ["steel", "#B8B8D0"],
    ["flying", "#A890F0"],
    ["unknown", "#68A090"],
  ];

  typeColorPairs.forEach(([type, color]) => {
    it(`should return ${color} for ${type} type`, () => {
      expect(getTypeColor(type)).toBe(color);
    });
  });

  it("should return default color #68A090 for unknown type", () => {
    expect(getTypeColor("unknown")).toBe("#68A090");
  });
});
