let a = prompt('Enter a');
a = parseFloat(a);

let b = prompt('Enter b');
b = parseFloat(b);

let c = prompt('Enter c');
c = parseFloat(c);


if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
} else if (b + c > a || c + a > b || a + b > c) {
    if (a === b && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b || a === c || b === c){
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}
