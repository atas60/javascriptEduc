// camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Function
function createCircle(radius) {
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);

// Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1); // new create an empty objey such as const x = {}; and it will return 