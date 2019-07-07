let a1 = prompt('Enter a1');
a1 = parseFloat(a1);

let a2 = prompt('Enter a2');
a2 = parseFloat(a2);

let b1 = prompt('Enter b1');
b1 = parseFloat(b1);

let b2 = prompt('Enter b2');
b2 = parseFloat(b2);

let c1 = prompt('Enter c1');
c1 = parseFloat(c1);

let c2 = prompt('Enter c2');
c2 = parseFloat(c2);


let ac = Math.sqrt((c1 - a1)*(c1 - a1) + (c2 - a2)*(c2 - a2));
let bc = Math.sqrt((b1 - c1)*(b1 - c1) + (b2 - c2)*(b2 - c2));
let ab = Math.sqrt((a1 - b1)*(a1 - b1) + (a2 - b2)*(a2 - b2));

if (ac + bc === ab && ac === bc) {
    console.log(true);
} else {
    console.log(false);
}