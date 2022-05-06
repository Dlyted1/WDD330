  // Set the questions
  const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    }

};

// placing them inside an object called game that will be the namespace. This means that any references to the functions need to be replaced with game.function() outside the object or this.function() inside the object. //
// Game Object
const game = {
  start(quiz){
      this.score = 0;
      this.questions = [...quiz];
      view.hide(view.start);
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
      view.render(view.question,question);
      const response =  prompt(question);
      this.check(response);
  },
  check(response){
      const answer = this.question.realName;
      if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      alert('Correct!');
      this.score++;
      view.render(view.score,this.score);
      } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      alert(`Wrong! The correct answer was ${answer}`);
      }
  },
  gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.show(view.start);
  }
}
     

// After this, we have to edit the function that starts the game, so it includes the namespace: //
// game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false);