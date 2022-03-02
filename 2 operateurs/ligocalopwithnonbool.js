// false || true 
// its TRUE
// false || 'Mosh' 
// its Mosh
// false || 1
// its 1
// falsy(false)
// undefined
// null
// 0
// false
// ''
// NaN means Not A Number

// Anything that is not Falsy -> Truthy


// // false || 1 || 2 
// return 1 , as soon as he find an oprands truthy its returned
// its called short-circuiting

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);
//result is red

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

