//grab canvas element
var canvas = document.getElementById("myCanvas");

//We obtain our drawing context by calling the getContext method and passing it the string "2d", since we’ll be drawing in two dimensions
var context = canvas.getContext("2d");

// color strings
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";


//to draw the rectangle
//the fillRect and strokeRect methods. Both of these methods take the X and Y coordinates where you want to begin drawing the fill or the stroke, and the width and height of the rectangle.
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100); // the stroke and fill 10 pixels from the top and 10 pixels from the left of the canvas’s top-left corner

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    console.log(drawPattern);

    var img = new Image(); 
    img.src = "images/oldbike.png";
    img.onload = function() {
            var pattern = context.createPattern(img, "repeat"); 
            context.fillStyle = pattern;                        
            context.fillRect(10, 10, 100, 100);                  
            context.strokeRect(10, 10, 100, 100);             
            };
        }

        var canvas = document.getElementById("myCanvas3");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
        
        var canvas4 = document.getElementById("myCanvas4");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
        
   