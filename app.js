
const submitBtn = document.getElementById("submitBtn");



// function to handle the validation loop for the membership type
function validateMemberShip(){
let memberShipType = prompt("enter your membership type (student/regular):");
    
while (true){
if(memberShipType === "student" || memberShipType === "regular"){
   break;}

   else {
    memberShipType =prompt("enter your membership type (student/regular):");
   }
}
return memberShipType;
}


const userNameInput = document.getElementById("userName");
const membershipInput = document.getElementById("Membership");
const genreInput = document.getElementById("genre");
const bookTitleInput = document.getElementById("bookTitle");


const resultCard= document.getElementById("result-card");



submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userName = userNameInput.value;
    const memberShip = membershipInput.value;
    const bookGenre = genreInput.value;
    const bookTitle = bookTitleInput.value;

   if (memberShip === "student" || memberShip === "regular"){


    const student = [userName,memberShip, bookGenre, bookTitle];
    renderingStudent(student);

   }
});


function renderingStudent(student){
    for (let i=0;i<student.length;i++){
        const para = document.createElement("p");
        para.innerHTML=student[i];
        resultCard.appendChild(para);
    }
    
}
// function to collect all user data 

function collectUserData(){
let userName = prompt("Enter Your Name");
let memberShipType = validateMemberShip();
let book=prompt("Do you prefer fiction or non-fiction book genre?");
let bookTitle = prompt("Please write the specific title of the book you want to borrow");
let userData = [userName,memberShipType,book,bookTitle];

return userData;
}



// Initialize an Inventory Array
let availableGenres=["Fiction","Science","History","Biography"];

//
function applyDiscount(userData){
    if (userData[1]==="student"){
        userData.push("20% Discount");

    }else if (userData[1] === "regular"){
        userData.push("No Discount");
    }
    return userData;
}


//
function addNewGenre(genre){
    availableGenres.push(genre);
}


function displayGenres() {
    for(let i =0; i <availableGenres.length;i++)
    {
        console.log("- We offer: " +availableGenres[i]);
    }
}


// 
let userData=collectUserData();
userData=applyDiscount(userData);
console.log(userData);
addNewGenre("history");
displayGenres();

