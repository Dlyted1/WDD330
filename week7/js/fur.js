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
//creating a Promise example1
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

//JavaScript PROMISE OBJECT
   // A JavaScript Promise object contains both the producing code and calls to the consuming code:
    ////creating a Promise example2
   let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

      //When the producing code obtains the result, it should call one of the two callbacks:
            // Result	Call
               // Success	myResolve(result value)
               // Error	    myReject(error object)  

 //Async Functions
 async function loadGame(userName) {

    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }

    catch (error){
        throw error;
    }
}

// Functions That Return Functions
function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();
//Hello

const frenchGreeter = greeter('Bonjour');
frenchGreeter();
//Bonjour


const germanGreeter = greeter('Guten Tag');
germanGreeter();
//Guten Tag

//CLOSURES
   //A function can access all variables defined inside the function and a is a local variable like this:
myFunction();

function myFunction() {
  let a = 4;
  document.getElementById("demo").innerHTML = a * a;
}

  //But a function can also access variables defined outside the function, here the b is a global variable, like this:
let b = 4;
myFunction();

function myFunction() {
  document.getElementById("demo").innerHTML = b * b;
} 

//Closure Example
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
  })();
  
  function myFunction(){
    document.getElementById("demo").innerHTML = add();
  }

      //Above Example Explained: The variable add is assigned to the return value of a self-invoking function.
              //The self-invoking function only runs once. It sets the counter to zero (0), and ////returns a function expression.
              //This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
              //This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
              //The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

function reverse(string) {
    return string.split('').reverse().join('');
}

const message = 'Hello JavaScript';
reverse(message);