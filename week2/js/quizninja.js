//example of using the prompt and alert dialogs, along with variables to store the responses in to create some interactivity with the user.

const question = "What is Superman's real name?" //declares a variable called question and assigns the string 'What is Superman's real name?'

const answer = prompt(question); //ask the question stored in the question variable, using a prompt dialog: allows the player to type in a response, which is then stored in the variable it is assigned to, which is answer. 

alert(`You answered ${answer}`); //use an alert dialog to display the player's answer using string interpolation to insert the value of answer into the template literal that is displayed in an alert box: shows the player the answer they provided.
