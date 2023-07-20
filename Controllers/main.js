const btnlogin = document.getElementById("btn-login");
const emailinput = document.getElementById("email-input");
const passwordinput = document.getElementById("pass-input");

btnlogin.addEventListener("click", function (event) {
  event.preventDefault;
  let email = emailinput.value;
  let password = passwordinput.value;

  console.log(email, password);

  window.location.href ="./home.html";
});
