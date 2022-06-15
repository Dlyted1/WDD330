//animation 

const squareElement = document.getElementById('square');
let angle = 0;


//first argument to increase the value of angle by 2 then next argument equates to a frame speed of 60 frames per second
setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)` 
}, 1000/60);   