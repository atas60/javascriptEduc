const numbers = [1, 2, 3];
// replace some with every

// evry() check every element
// some () one lest elemeent
const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive);