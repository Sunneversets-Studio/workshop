"use strict";
const arr = [1, 2, 3, 4, 5];
// map: transform each element of an array
arr.map(x => x + 2); // Add 2 to each element
arr.map(x => x > 2); // => [false, false, true, true, true]
// filter: select specific elements from an array
arr.filter(x => x > 2); // => [3, 4, 5]
arr.filter(x => x < 0); // => []
// reduce: combine elements in an array
arr.reduce((a, b) => a + b); // sum of array, (((1 + 2) + 3) + 4) + 5
// every: test if every element satisfies the condition
arr.every(x => x > 2); // false
arr.every(x => x > 0); // true
// some: test if some element satisfies the condition
arr.some(x => x > 2); // true
arr.some(x => x < 0); // false
// use map and reduce to implement every
function every(array, predicate) {
    return array
        .map(predicate)
        .reduce((a, b) => a && b);
}
