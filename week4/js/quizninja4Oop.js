// Set the questions
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
    { name: "Green Lantern",realName: "Hal Jordan" }
    { name: "Catwoman",realName: "Selina Kyle" }
    { name: "Spiderman",realName: "Peter Parker" }
    { name: "Aquaman",realName: "Arthur Curry" }
    { name: "Batgirl",realName: "Barbara Gordon"}
    { name: "Shazam",realName: "Billy Batson"}
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
   // add below a reference to the form in our JavaScript. Add the following line of code as a property of the View Object
    response: document.querySelector('#response'),
    
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
    },
    
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
      }
      
};

// placing them inside an object called game that will be the namespace. This means that any references to the functions need to be replaced with game.function() outside the object or this.function() inside the object. //
// Game Object
const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
  },
  ask(name){
    console.log('ask()invoked');  
    if(this.questions.length > 2) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
        shuffle(options);
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        view.render(view.response,view.buttons(options));
    }
    else {
        this.gameOver();
    }
  },
  check(event){
    console.log('check(event) invoked');
    const response = event.target.textContent;
    const answer = this.question.realName;
    if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      this.score++;
      view.render(view.score,this.score);
    } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    this.ask();
  },
  gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
  }
}
     

// After this, we have to edit the function that starts the game, so it includes the namespace: //
// game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);
