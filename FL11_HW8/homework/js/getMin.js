function getMin() {
    if (arguments.length === 0) {
        return undefined;
    }
    let a = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < a) {
            a = arguments[i];
        } 
    } 
    return a;
}

console.log(getMin(5, 6, 2, 0, -160));