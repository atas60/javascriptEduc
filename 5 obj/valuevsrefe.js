// value Types: Number String boolean Symbol undefined null
// reference Type: object, Function, Array
// primitive are copied by their value
// object are copied by their reference


// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);

let obj = { value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);

