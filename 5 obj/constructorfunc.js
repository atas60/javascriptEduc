// camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// factory function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    }
}

//constructor Function we sue pascal Notation

function Circle(raadius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);