# set-intersection

## Description

Missing itersection operation for Set.

Second implementation can do intersection operation between any number of sets.

Third implementation can do intersection operation between any combination of sets.

## Install

```bash
bun add @fightingdreamer/set-intersection
```

## Usage

```js
import {intersection} from '@fightingdreamer/set-intersection'

const a = new Set([1,2,3])
const b = new Set([3,4,5])
const result = intersection(a, b)
const expect = [3]
for (const value of expect) {
  console.assert(result.has(value))
}
```

```js
import {intersectionMany} from '@fightingdreamer/set-intersection'

const sets = [
  new Set([1,2,3]),
  new Set([2,3,4]),
  new Set([3,4,5])
][Symbol.iterator]()
const result = intersectionMany(sets)
const expect = [3]
for (const value of expect) {
  console.assert(result.has(value))
}
```

```js
import {intersectionPartial} from '@fightingdreamer/set-intersection'

const sets = [
  new Set([1,2,3]),
  new Set([2,3,4]),
  new Set([3,4,5])
][Symbol.iterator]()
const result = intersectionPartial(sets, 2)
const expect = [2,3,4]
for (const value of expect) {
  console.assert(result.has(value))
}
```

## Usage (node / commonjs)

```js
const {intersection} = require('@fightingdreamer/set-intersection')

const a = new Set([1,2,3])
const b = new Set([3,4,5])
const result = intersection(a, b)
const expect = [3]
for (const value of expect) {
  assert(result.has(value))
}
```

```js
const {intersectionMany} = require('@fightingdreamer/set-intersection')

const sets = [
  new Set([1,2,3]),
  new Set([2,3,4]),
  new Set([3,4,5])
][Symbol.iterator]()
const result = intersectionMany(sets)
const expect = [3]
for (const value of expect) {
  assert(result.has(value))
}
```


```js
const {intersectionPartial} = require('@fightingdreamer/set-intersection')

const sets = [
  new Set([1,2,3]),
  new Set([2,3,4]),
  new Set([3,4,5])
][Symbol.iterator]()
const result = intersectionPartial(sets, 2)
const expect = [2,3,4]
for (const value of expect) {
  assert(result.has(value))
}
```

## Functions

```js
function intersection<T>(a: Set<T>, b: Set<T>): Set<T>
```

Will return overlapping items from `a` and `b`.

```js
function intersectionMany<T>(sets: Iterable<Set<T>>): Set<T>
```

Will return overlapping items when item exist in every Set.

```js
function intersectionPartial<T>(
  sets: Iterable<Set<T>>,
  minCount: number,
): Set<T>
```

Will return overlapping items when item exist in at least `minCount` number of `sets`.
