// Immediately Invokes Function Expression (IIFE)
(function() {
    console.log("My favorite number is 3"); // first ()'s make it an expression
    })();  // last two () invokes or calls the function immediately

(favNumber = function(num = 3) {
    console.log("My favorite number is " + num); 
    })();

    //to call
    favNumber(5);