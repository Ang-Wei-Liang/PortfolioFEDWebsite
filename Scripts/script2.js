"use strict";

/* Typewriter Animation */

var typed = new Typed(".auto-type", {
    strings: ["Project", "Game", "A Brain Test"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  })


/*End*/

/*Start of Game 2*/

const element4 = document.getElementById('startButton2')    //on click myNumInput occurs
 const element5 = document.getElementById('submitButton')
 const element6 = document.getElementById('userInput2')
 const element7 = document.getElementById('startB3')
 const element8 = document.getElementById('messageLose')


 element4.addEventListener("click", () => {
 
   element5.style.visibility = 'visible';
   element6.style.visibility = 'visible';
   element7.style.visibility = 'visible';
   element8.style.visibility = 'hidden';
   
   userInput2.value = "";
    //Setting up number

    var n = 1;
    var randomNum2 = 10**(n-1) -1 + Math.floor(Math.random()*(10**n));
    var pointsCount2 = 0
    startB2.innerHTML = "Points: " + pointsCount2
    startB3.innerHTML = "Number: " + randomNum2  //shows number


    element5.addEventListener("click", () => {
      let userInput2 = document.querySelector("#userInput2")
      
      if (userInput2.value == randomNum2){
        userInput2.value = ""; 
        element5.style.visibility = 'hidden';
        element6.style.visibility = 'hidden';
        element7.style.visibility = 'visible';
        element8.style.visibility = 'hidden';
      
         pointsCount2 ++
         startB2.innerHTML = "Points: " + pointsCount2
         n++
         randomNum2 = 0 + Math.floor(Math.random()*(10**n));
         startB3.innerHTML = "Number: " + randomNum2
         //timer countdown
         var timeleft = 5;
         var downloadTimer1 = setInterval(function(){
           if(timeleft <= 0){
             clearInterval(downloadTimer1);
             document.getElementById("countdown").innerHTML = "Key in the number: ";
              
             element5.style.visibility = 'visible';
             element6.style.visibility = 'visible';
             element7.style.visibility = 'hidden';
     
           } else {
             document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
           }
           timeleft -= 1;
         }, 1000);
         //end of timer countdown

      }
      else {
         
         element8.style.visibility = 'visible';

         messageLose.innerHTML = "Incorrect Number! Points: " + pointsCount2 + ".\nClick start, and key in the single digit number to try again."
      }

   });
  
});

/*End*/
