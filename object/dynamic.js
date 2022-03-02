const circle = {
    radius: 1
};

// We can not re assigne to crcile such as circle = {}

circle.color='yellow';
circle.draw = function(){}

delete circle.color;
delete circle.draw;

console.log(circle);