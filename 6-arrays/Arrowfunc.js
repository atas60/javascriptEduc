const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find (course => course.name === 'a');


// const course = courses.find(function(course){
//     return course.name === 'a';
// });
// Arrow function
console.log(course);