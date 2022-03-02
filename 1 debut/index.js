let person = {
    name: 'Mosh',
    age:30
};
//Dot Notation default choice 
person.name ='Jhon';


// Bracket Notation
let selection = 'name';
// we can use selection somewhere in the web page and use it like that 
// and the code will be like person[selection]= 'Mary';
person['name'] = 'Mary';
console.log(person.name);