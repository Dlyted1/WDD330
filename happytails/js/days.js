//determine days between stored date and visit date... today
//determine todays date
const todaysDate = Date.now(); 
const millisecondsToDays = 8640000;  // divide the difference between dates in milliseconds
// last time visit... stored  in local storage
   //1.     localStrage.getItem('lastvisit')
const lastVisit = localStorage.getItem("lastvisit") || todaysDate; 

//determine number of days
     // to round number    .toFixed(0)
daysbetween = ((todaysDate - lastVisit) / millisecondsToDays).toFixed(0);

if (daysbetween == 0) {
<<<<<<< HEAD
  document.querySelector("#thelastvisit").innerHTML = `Yee-haw! It's your 1st visit!`;
=======
  document.querySelector("#thelastvisit").innerHTML = `Dog-gon-it... It's your 1st visit!`;
>>>>>>> f0fb6c810623e4b21d92d02be0b89cdc9597475c
  }

  else {

  document.querySelector("#thelastvisit").innerHTML = `Welcome back it's been: ${daysbetween} days.`;
}

  //need to update the stored date
<<<<<<< HEAD
  localStorage.setItem("lastvisit", todaysDate);
=======
  localStorage.setItem("lastvisit", todaysDate);
>>>>>>> f0fb6c810623e4b21d92d02be0b89cdc9597475c
