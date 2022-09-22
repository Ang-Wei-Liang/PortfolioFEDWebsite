/* Start of form validation */

const name1 = document.getElementById('name')
const email = document.getElementById('email')
const textarea1 = document.getElementById('textarea1')
const textarea2 = document.getElementById('textarea2')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name1.value === '' || name1.value == null) {
    messages.push('Name is required')
  }
  
  if (isNaN(name1.value) == false) {
    messages.push('Name cannot be a number')
  }
  
  if (email.value.length < 10) {
    messages.push("Email must be at least 10 characters long")
  }

  if (textarea1.value.length < 20 || textarea2.value.length < 20) {
    messages.push("Reply must be at least 20 characters long")
  }
  if (messages.length > 0){
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
  }
  else alert1()
  
})

function alert1(){
alert("Submission successful, Have a nice day!")
}

/*End*/

/*Button, Scroll Up*/


function scrollUp(){
window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
});
}

/*End*/