

//Select
const form  = document.querySelector("form");
const userNameInput=document.getElementById("userName");
const passwordInput=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");

//create
const userNameLabel=document.createElement("label");
const passwordLabel=document.createElement("label");
const confirmPasswordLabel=document.createElement("label");

//add text

userNameLabel.textContent="UserName";
passwordLabel.textContent="Password";
confirmPasswordLabel.textContent="Confirm Password";

//append 
userNameInput.before(userNameLabel);
passwordInput.before(passwordLabel);
confirmPassword.before(confirmPasswordLabel);