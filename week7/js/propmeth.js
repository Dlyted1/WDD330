// Property Variables
var item = "Bottle of water";
console.log(item.length);   //Example of a property but use the  .length behind the item. to calculate the length of the specific string "Bottle of water" will be 15

//Methods
var item = "Can of soda";
console.log(item.indexOf("of")); // Method example put behind item. the 1st work not capitalized but the secondword will be camelcase - looking for precision of the word of

// method substring example
//to cut off a part of the string
var item = "Glass of water";
console.log(item.substring(0, 6)) // first number where to start second number where to cut off in the string

//method replace example
var item = "Glass of milk";
console.log(item.replace("milk", "juice"));

//method UPPERCASE
var item = "Can of Juice";
console.log(item.toUpperCase());

//Array usage


var items = ["Bottle", 4, true];  //item is now plural for array
console.log(items);  //to see what is in the array -click arrow in console to see differ properties, methods and index that we can use. on last line we can extend further by clicking on arrow in console see the differ methods we can use in the array

// Join in array
var items = ["Can", 5, true];
console.log(items.join(" | & ")); // can use any character to join
// console.log(items.join(" - "));
// console.log(items.join(", "))


//Pop - removes an item inside array console.log(items.pop());
var items = ["Bottle", 6, true];
//console.log(items.pop());  to see what item is being removed
items.pop(); //will remove the last item from array
console.log(items);

//Pop and join
var items = ["Bottle", 4, true];
items.pop();
console.log(items.join(", "));

//Push will add item instead of removing
var items = ["Bottle", 3, true];
items.push("Juice");  // to add item juice to array
console.log(items);
// console.log(items.push("Juice")); // to show where its; now indexed


