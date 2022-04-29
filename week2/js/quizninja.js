// Set the questions in an aray, question as its first element and the answer as its second element
const quiz = new Map([
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonderwoman's real name?","Dianna Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
]);

// initialize score
let score = 0;    //create and initialize a variable called score to keep track of how many correct answers the player has given:

for(const [question,answer] of quiz.entries()){

// get answer from user
const response = prompt(question);
// check if answer is correct
if(response === answer){
  alert('Correct!');
  // increase score by 1
  score++;
} else {
  alert(`Wrong! The correct answer was ${answer}`);
}
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);

// When the loop has finished iterating through each question in the array, it breaks out of the block and finishes by displaying another alert dialog to inform the player the game is over and telling them how many questions they answered correctly. This uses a template literal to display the score



