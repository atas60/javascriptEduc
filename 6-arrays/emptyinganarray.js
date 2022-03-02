let numbers = [1, 2, 3, 4];
let another = numbers;

// Solutions 1
// numbers = [];

// Soltions 2
// numbers.length = 0;
// Soltions 3
// numbers.splice(0, numbers.length);
// Solutions 4
while (numbers.length > 0)
    numbers.pop();
    
Consol.log(another);