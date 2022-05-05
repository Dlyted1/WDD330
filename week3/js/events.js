function doSomething(){
console.log('Something Happened!');
}

// function doSomething(event){
//  console.log(event.type);
// } 
addEventListener('click', doSomething);

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);