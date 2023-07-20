const btnLogin = document.getElementById("btn-login")
const emailinput = document.getElementById("email-input")
const passwordinput = document.getElementById("pass-input")

btnLogin.addEventListener("click", function () {
    let email = emailinput.value;
    let password = passwordinput.value;
    console.log(email,password)
})