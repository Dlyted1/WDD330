//animation 

const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)` //to increase the value of angle by 2
}, 1000/60);   // 2nd argument equates to a frame speed of 60 frames per second