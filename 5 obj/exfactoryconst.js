// let address= createAddress('a','b','c');
let address= new Address('a','b','c');

console.log(address);
//factory funciton
// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     };

// }

// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}