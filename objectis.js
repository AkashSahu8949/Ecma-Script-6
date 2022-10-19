// Object.is() to check if two values are the same.
let amount = +0,
    volume = -0;
console.log(Object.is(amount, volume));

// without object.is()
let amount1 = +0,
    volume1 = -0;
console.log(volume1 === amount1);