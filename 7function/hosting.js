// function Declaration
// hoisting moving funciton declaration to the top of the file its done automaticly
// we can call it before its declaration
walk();
function walk() {
    console.log('walk');
}


// Function Expression
// we cant call it before its defined function
const run = function () {
    console.log('run');
};
