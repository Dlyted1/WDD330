function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;  //stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  //console.log(key);
  key.classList.add('playing');
}

function removeTransition(e) {
  //console.log(e);
  if(e.propertyName !== 'transform') return; //skip if it's not a transform
  //console.log(e.propertyName);
  this.classList.remove('playing');   //if forget what this is do a console.log(this); to find out
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition)); //when transition ends remove it
window.addEventListener('keydown', playSound);