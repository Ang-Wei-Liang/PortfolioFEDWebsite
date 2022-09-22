"use strict";

/* Face Reveal */
function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function myFunction() {
    var el = document.getElementById("Face");
  console.log(el);
    fadeIn(el);
}

/* End */



/*Start of question ask*/

function myFunction1() {
   let userInput = document.querySelector("#userInput");
   let message= document.querySelector("#message");

   if (userInput.value == ""){
    message.innerHTML = "Hello, Nameless One, Welcome to my Webpage!"
   }
  else
   message.innerHTML = "Hello, " + userInput.value + ". Welcome to my Webpage!"
}


/*End*/


/*Start of Date Output*/

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();



var hr = today.getHours(), min = today.getMinutes()
var time = hr + ':' + min



var dayName = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = today.getDay();
var dayOfWeek = dayName[day];


var dateTime = dayOfWeek + ' ' + date + ' ' + time

document.getElementById("tableHeading").innerHTML = dateTime;


if (dayOfWeek == "Mon"){dayOfWeekColor("a2")}

if (dayOfWeek == "Tues"){dayOfWeekColor("b2")}

if (dayOfWeek == "Wed"){dayOfWeekColor("c2")}

if (dayOfWeek == "Thur"){dayOfWeekColor("d2")}

if (dayOfWeek == "Fri"){dayOfWeekColor("e2")}

if (dayOfWeek == "Sat"){dayOfWeekColor("f2")}

function dayOfWeekColor (idNum){
  document.getElementById(idNum).style.backgroundColor = "yellow";
}

/*End*/

/* Start of Fade in Upon Scroll Animation */

window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal')


for (var i = 0; i < reveals.length; i++){

var windowheight = window.innerHeight;
var revealtop = reveals[i].getBoundingClientRect().top;
var revealpoint = 150;

if(revealtop < windowheight - revealpoint){
    reveals[i].classList.add('active');
}
else{
    reveals[i].classList.remove('active');
}
}
}
/*End*/





