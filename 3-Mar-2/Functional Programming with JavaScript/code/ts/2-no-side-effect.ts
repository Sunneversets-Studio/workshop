function factorial(n: number): number {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorial_with_side_effect(n: number): number {
    // This printing is a side effect
    console.log('n = ', n);
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var counter = 0;

function implicit_input(): number {
    // implicit input: reading global variable
    if (counter % 2 == 0) {
        // implicit output: modifying global variable
        counter /= 2;
    } else {
        // implicit output: modifying global variable
        counter = counter * 3 + 1;
    }
    return counter;
}

console.log(factorial(10) === 3628800);