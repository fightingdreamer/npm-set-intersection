import { flatten } from "@fightingdreamer/iter-flatten";
import { countUnique } from "@fightingdreamer/iter-count";
import { reduceWithDefault } from "@fightingdreamer/iter-reduce";

/**
 * Intersection between two Sets
 */
export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  const result = new Set<T>();
  for (const elem of a) if (b.has(elem)) result.add(elem);
  return result;
}

/**
 * Intersection between n Sets
 */
export function intersectionMany<T>(sets: Iterable<Set<T>>): Set<T> {
  return reduceWithDefault(sets, intersection, new Set<T>());
}

/**
 * Intersetion between n Sets,
 * item in included when present in at least `minCount` Sets
 */
export function intersectionPartial<T>(
  sets: Iterable<Set<T>>,
  minCount: number,
): Set<T> {
  const result = new Set<T>();
  for (const [item, count] of countUnique(flatten(sets)).entries())
    if (count >= minCount) result.add(item);
  return result;
}
