// Function Composition: f.g(x)= f(g(x))
function composition(f: (_: any) => any, g: (_: any) => any): (_: any) => any {
    return x => f(g(x));
    // function (x) {
    //     return f(g(x));
    // }
}

function add_two(x: number): number {
    return x + 2;
}

function times_three(x: number): number {
    return x * 3;
}

console.log(composition(times_three, add_two)(10) === (10 + 2) * 3);

///////////////////////////////////////////////////////////////////////////////

function adder(x: number): (_: number) => number {
    // This closure captures outer constant x
    return y => x + y;
    // function (y) {
    //     return x + y;
    // }
}

const add_three = adder(3); // add_three(y) === y + 3
console.log(add_three(2) === 2 + 3);

///////////////////////////////////////////////////////////////////////////////

function not_pure_adder(x: number): () => number {
    // Cannot be const here
    let sum = 0;
    return () => {
        // This closure captures outer constant x and variable sum
        sum += x;
        return sum;
    }
}

const adder_two = not_pure_adder(2);
// violates Referential Transparency
console.log(adder_two() === 2);
console.log(adder_two() === 4);
