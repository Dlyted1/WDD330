  // Set the questions
  const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];
// placing them inside an object called game that will be the namespace. This means that any references to the functions need to be replaced with game.function() outside the object or this.function() inside the object. //
const game = {
  start(quiz){
      this.questions = [...quiz];
      this.score = 0;
      // main game loop
      for(const question of this.questions){
      this.question = question;
      this.ask();
      }
      // end of main game loop
      this.gameOver();
  },
  ask(){
      const question = `What is ${this.question.name}'s real name?`;
      const response =  prompt(question);
      this.check(response);
  },
  check(response){
      const answer = this.question.realName;
      if(response === answer){
      alert('Correct!');
      this.score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  },
  gameOver(){
      alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
  }
}

// After this, we have to edit the function that starts the game, so it includes the namespace: //
game.start(quiz);