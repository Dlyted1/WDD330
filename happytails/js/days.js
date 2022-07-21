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
  document.querySelector("#thelastvisit").innerHTML = `Dog-gon-it... It's your 1st visit!`;
  }

  else {

  document.querySelector("#thelastvisit").innerHTML = `Welcome back it's been: ${daysbetween} days.`;
}

  //need to update the stored date
  localStorage.setItem("lastvisit", todaysDate);