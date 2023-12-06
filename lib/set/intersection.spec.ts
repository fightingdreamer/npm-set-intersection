import { test, expect, describe } from "vitest";
import {
  intersection,
  intersectionMany,
  intersectionPartial,
} from "./intersection";

describe("intersection", () => {
  test.each([
    { a: new Set([]), b: new Set([]), expected: new Set([]) },
    { a: new Set([1, 2, 3]), b: new Set([3, 4, 5]), expected: new Set([3]) },
  ])("intersection($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(intersection(a, b)).toEqual(expected);
  });
});

describe("intersectionMany", () => {
  test.each([
    { sets: [new Set(), new Set()], expected: new Set() },
    { sets: [new Set([1, 2, 3]), new Set([4, 5, 6])], expected: new Set() },
    {
      sets: [new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])],
      expected: new Set([3]),
    },
  ])("intersectionMany($sets) -> $expected", ({ sets, expected }) => {
    expect(intersectionMany(sets)).toEqual(expected);
  });
});

describe("intersectionPartial", () => {
  test.each([
    { sets: [], minCount: 0, expected: new Set() },
    {
      sets: [
        new Set([1, 2, 3, 4]),
        new Set([3, 4, 5, 6]),
        new Set([5, 6, 7, 8]),
      ],
      minCount: 3,
      expected: new Set(),
    },
    {
      sets: [new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])],
      minCount: 2,
      expected: new Set([2, 3, 4]),
    },
  ])(
    "intersectionPartial($sets, $minCount) -> $expected",
    ({ sets, minCount, expected }) => {
      expect(intersectionPartial(sets, minCount)).toEqual(expected);
    },
  );
});
