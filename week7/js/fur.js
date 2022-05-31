// Immediately Invokes Function Expression (IIFE)
(function() {
    console.log("My favorite number is 3"); // first ()'s make it an expression
    })();  // last two () invokes or calls the function immediately

(favNumber = function(num = 3) {
    console.log("My favorite number is " + num); 
    })();

    //to call
    favNumber(5);


//example 2 IIFE
var a = 2;

(function() {
    var a = 3;
    console.log(a);
})

console.log(a);

//block scope var functions
let b = 2;
{
    let b = 3;
    console.log(b);
}

console.log(b);

//example 3 (IIFE)
function myFunction(a, b) {
    return a * b;
  }
  myFunction(10, 2);           // Will return 20 The global function (myFunction) returns the product of the arguments (a ,b):

  //Self Conatined Code Block
  // An IIFE can be used to enclose a block of code inside its own private scope so it doesn’t interfere with any other part of the program. Using IIFEs in this way means code can be added or removed separately. The example shows two blocks, A and B, that are able to run code independently of each other

  (function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());         //Hello from Block A

    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());            // Hello from Block B

  
//FUNCTIONS THAT DEFINE AND REWRITE THEMSELVES
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
  //This logs a message in the console, then redefines itself to log a different message in the console. When the function has been called once, it will be as if it was defined like this:
  function party() {
    console.log('Been there, got the T-Shirt');
}  //Every time the function is called after the first time, it will log the message 'Been there, got the T-Shirt':


//RECURSIVE FUNCTIONS
   //Russian Matryoshka Dolls Example

//function processDoll(doll) {
    // 1) basecase or stopping condition
//          if( we found the piece of chocolate )
//             return "yum yum";
    // 2) Recursive call to itself (if above fails)
//            else if(there are no more dolls)
//              return "no chocolate here"
//            else
//              processDoll(smaller doll) 
// }

  //Recursion Live Example
        //5! (5 factorial) translates to 5*4*3*2*1 is 120
function factorial(n) 
{
      //basecase
      if(n == 0 || n == 1)   
      {      
      return 1;
      }
      var result = n;
      //recursive call 
      while (n > 1) {
          result = result * (n-1);
          n = n - 1;
      }
      return result;
}
console.log(factorial(5))  //returns 120
// document.write(factorial(5));

//CALLBACKS
//creating a Promise
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});



