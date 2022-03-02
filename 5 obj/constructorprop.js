// camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}

//constructor Function we sue pascal Notation

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);