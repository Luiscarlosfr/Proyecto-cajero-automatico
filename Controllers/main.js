
const emailinput = document.getElementById("email-input");
const passwordinput = document.getElementById("pass-input");
const btnlogin = document.getElementById("btn-login");




btnlogin.addEventListener("click", function (event) {
  event.preventDefault;
  let email = emailinput.value;
  let password = passwordinput.value;
 // console.log(email);
 // console.log(password);
  window.location.href = "./home.html";
});

let email="";
emailinput.addEventListener("change",function(){email=emailinput.value
console.log("emailusuario", emailinput)})
let password="";
passwordinput.addEventListener("change",function(){password=passwordinput.value
  console.log("passwordusuario", passwordinput)})