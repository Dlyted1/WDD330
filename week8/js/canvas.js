//grab canvas element
var canvas = document.getElementById("myCanvas");

//We obtain our drawing context by calling the getContext method and passing it the string "2d", since we’ll be drawing in two dimensions
var ctx = canvas.getContext("2d");

// color strings
ctx.strokeStyle = "red";
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";


//to draw the rectangle
//the fillRect and strokeRect methods. Both of these methods take the X and Y coordinates where you want to begin drawing the fill or the stroke, and the width and height of the rectangle.
ctx.fillRect(10, 10, 100, 100);   
ctx.strokeRect(10, 10, 100, 100); // the stroke and fill 10 pixels from the top and 10 pixels from the left of the canvas’s top-left corner

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red";

    var img = new Image(); 
    img.src = "images/oldbike.png";
    img.onload = function() { 
    };            
}