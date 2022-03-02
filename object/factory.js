function createCircle(radius){
    return {
        radius,// si notre key et value sont les memes o peut suprimer la value et laisser juste le key radius: radius,
       
       draw(){// plus court que l'autre
        console.log('draw');
       }
        // draw: function(){
            //console.log('draw');
        // }
    };
}
// factory function

const circle1 = createCircle(1);
console.log('circle1');

const circle2 = createCircle(2);
console.log('circle2');
