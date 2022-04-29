const quiz = [
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonder Woman's real name?","Diana Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
];

//start(). This is the main game function that contains all the steps of playing the game. 
function start(quiz){
  let score = 0;

  //After this, it iterates over the quiz array and invokes the ask() function for each question. We then, invoke the check() function to check if the player's response is correct. After we have looped through every question in the quiz array, the game is over, so the gameOver() function is invoked.
   // main game loop
  for(const [question,answer] of quiz){
      const response = ask(question);
      check(response,answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question){
      return prompt(question);
  }

  function check(response,answer){
      if(response === answer){
      alert('Correct!');
      score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  }

  function gameOver(){
      alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz);  // This invokes the start() function with the quiz variable passed to it as an argument. This is required to actually start the quiz!