

//Select
// const form  = document.querySelector("form");
const userNameInput=document.getElementById("userName");
const passwordInput=document.getElementById("password");
const confirmPasswordInput=document.getElementById("confirmPassword");
const registerBtn=document.getElementById("regBtn");

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
confirmPasswordInput.before(confirmPasswordLabel);


//required validation 
registerBtn.addEventListener("click",(e) =>{
    e.preventDefault();

    if(userNameInput.value===""){
        const error = document.createElement("span");
        error.textContent="user name is required";
        userNameInput.after(error);
    }



    if(passwordInput.value===""){
        const error = document.createElement("span");
        error.textContent="Password is required";
        passwordInput.after(error);
    }

 if(confirmPasswordInput.value===""){
        const error = document.createElement("span");
        error.textContent="confirm Password is required";
        confirmPasswordInput.after(error);
    }



})