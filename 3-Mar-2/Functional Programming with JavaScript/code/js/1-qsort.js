"use strict";
function qsort(arr) {
    if (arr.length === 0) {
        return [];
    }
    else {
        const p = arr[0];
        const small = arr.filter(x => x < p);
        const large = arr.filter(x => x > p);
        return [].concat(qsort(small), [p], qsort(large));
    }
}
function qsort_imperative(arr, head, tail) {
    if (head >= tail || arr.length <= 1) {
        return;
    }
    let i = head, j = tail;
    const pivot = arr[Math.floor((head + tail) / 2)];
    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        while (arr[j] > pivot) {
            --j;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            ++i;
            --j;
        }
        else if (i == j) {
            ++i;
        }
    }
    qsort_imperative(arr, head, j);
    qsort_imperative(arr, i, tail);
}
console.log(qsort([3, 2, 5, 1, 34, 4]));
const arr = [3, 2, 5, 1, 34, 4];
qsort_imperative(arr, 0, arr.length - 1);
console.log(arr);
