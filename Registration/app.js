

//Select

const userNameInput=document.getElementById("userName");
const passwordInput=document.getElementById("password");
const confirmPasswordInput=document.getElementById("confirmPassword");
const registerBtn=document.getElementById("regBtn");

const inputs = document.getElementsByClassName("required");
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

// check if the user input in the password and confirm password inputs match
if(passwordInput.value !== confirmPasswordInput.value){
    const error = document.createElement("span");
    error.textContent="Password and Confirm Password should match"
    confirmPasswordInput.after(error);
}else{alert("successful user registration");
}


})



//Enable register button when all inputs are valid

userNameInput.addEventListener("keyup",checkInputs);
passwordInput.addEventListener("keyup",checkInputs);
confirmPasswordInput.addEventListener("keyup",checkInputs);




function checkInputs () {

   
    if (userNameInput.value !== "" && passwordInput.value !== "" && confirmPasswordInput.value !==""){
        registerBtn.disabled=false;}
        else{
            registerBtn.disabled=true;
        }


    
}


//Add a required validation to each input 

function validateInput(input){


const error = document.createElement("span");
error.textContent="required";

input.addEventListener("input",()=>{

if(input.value === ""){
    input.after(error);
}else{error.remove();}

})
}

validateInput(userNameInput);
validateInput(passwordInput);
validateInput(confirmPasswordInput);