// Value Types Number String boolean Symbol undefined null
// Reference types Object Function Array
// let x = 10;
// let y =x;

// x=20;

// let x = { value: 10}; 
// let y=x;

// x.value = 20;

// Primitif are copied by their value
// Object are copied by their reference

//an other exemple
// let number = 10;
// function increase(number){
//     number++;// independant from other variable its local
// }

// increase(number);
// console.log(number);


let obj = { value: 10};
function increase(obj){
    obj.value++;
}
increase(obj); // its past by its refenrece two variable pointing to the same object
console.log(obj);